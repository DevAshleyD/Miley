from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods, require_POST
from django.conf import settings
from .forms import LoginForm
from .models import Contact
from activities.models import Activity
import json
from activities.utils import create_activity

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse('Authenticated successfully')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()

    return render(request, 'accounts/login.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('{}?next={}'.format(settings.LOGIN_URL, request.path))

@login_required
def dashboard(request):
    activities = Activity.objects.all().exclude(user=request.user)
    following_ids = request.user.following.values_list('id', flat=True)
    if following_ids:
        activities = activities.filter(user_id__in=following_ids).select_related('user', 'user__profile').prefetch_related('target')
    activities = activities[:10]
    return render(request, 'accounts/dashboard.html', {'section': 'dashboard',
        'activities': activities})

@login_required
def user_list(request):
    users = User.objects.filter(is_active=True)
    return render(request, 'accounts/user/list.html',
        {'section': 'people',
        'users': users})

@login_required
def user_detail(request, username):
    user = get_object_or_404(User, username=username)
    return render(request, 'accounts/user/detail.html',
        {'section': 'people',
        'user': user})

@require_POST
@login_required
def user_follow(request):
    json_data = json.loads(request.body)
    user_id = json_data['id']
    action = json_data['action']
    if user_id and action:
        try:
            user = User.objects.get(id=user_id)
            if action == 'follow':
                Contact.objects.get_or_create(user_from=request.user,
                    user_to=user)
                create_activity(request.user, 'is following', user)
            else:
                Contact.objects.filter(user_from=request.user,
                    user_to=user).delete()

            return JsonResponse({'status': 'ok'})
        except User.DoesNotExist:
            return JsonResponse({'status': 'not found'})

    return JsonResponse({'status': 'error'})
