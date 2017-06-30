from django.conf.urls import url
from django.conf.urls import include
from . import views

urlpatterns = [
    url(r'^login/$', views.user_login, name='login'),
    url(r'^logout/$', views.user_logout, name='logout'),
    # url(r'^logout-then-login/$', 'django.contrib.auth.views.logout_then_login', name='logout_then_login'),
    # url(r'^logged_out/$', views.user_logged_out, name='logged_out'),
    url(r'^$', views.dashboard, name='dashboard'),
]
