from django.conf.urls import url
from django.conf.urls import include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # url(r'^login/$', views.user_login, name='login'),
    url(r'^login/$',
        auth_views.LoginView.as_view(template_name='accounts/login.html'),
        name='login'),
    url(r'^logout/$', views.user_logout, name='logout'),
    url(r'^change-password/$',
        auth_views.PasswordChangeView.as_view(template_name='accounts/change_password.html'),
        name='password_change'),
    url(r'^change-password/done/$',
        auth_views.PasswordChangeDoneView.as_view(template_name='accounts/change_password_done.html'),
        name='password_change_done'),
    url(r'^reset-password/$',
        auth_views.PasswordResetView.as_view(template_name='accounts/reset_password.html'),
        name='password_reset'),
    url(r'^reset-password/done/$',
        auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html')),
    url(r'^reset-password/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})$',
        auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_confirm.html'),
        name='password_reset_confirm'),
    url(r'^reset-password/complete/$',
        auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_complete.html'),
        name='password_reset_complete'),
    url(r'^$', views.dashboard, name='dashboard'),
    url(r'^users/$', views.user_list, name='user_list'),
    url(r'^users.json', views.user_list_json, name='user_list_json'),
    url('^users/follow/$', views.user_follow, name='user_follow'),
    url(r'^users/(?P<username>[-\w]+)/$', views.user_detail, name='user_detail'),
]
