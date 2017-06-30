from django.conf.urls import url
from django.conf.urls import include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # url(r'^login/$', views.user_login, name='login'),
    url(r'^login/$', auth_views.LoginView.as_view(template_name='accounts/login.html')),
    url(r'^logout/$', views.user_logout, name='logout'),
    url(r'^change-password/$', auth_views.PasswordChangeView.as_view()),
    url(r'^change-password/done/$', auth_views.PasswordChangeDoneView.as_view()),
    url(r'^reset-password/$', auth_views.PasswordResetView.as_view()),
    url(r'^reset-password/done/$', auth_views.PasswordResetDoneView.as_view()),
    url(r'^$', views.dashboard, name='dashboard'),
]
