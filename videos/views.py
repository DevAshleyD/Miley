from django.shortcuts import render, get_object_or_404
from .models import Video

def list(request):
    videos = Video.objects.all()
    return render(request, 'videos/list.html', {'videos': videos})

def watch(request, slug):
    video = get_object_or_404(Video, slug=slug)
    return render(request, 'videos/watch.html', {'video': video})
