"""miley URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from graphene_django.views import GraphQLView
from .schema import schema
from .views import homepage

urlpatterns = [
    url(r'^$', homepage, name='homepage'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^blog/', include('blog.urls', namespace='blog', app_name='blog')),
    url(r'^images/', include('images.urls', namespace='images', app_name='images')),
    url(r'^accounts/', include('accounts.urls')),
    url(r'^paypal/', include('paypal.standard.ipn.urls')),
    url(r'^payments/', include('payments.urls', namespace='payments', app_name='payments')),
    url(r'^coupons/', include('coupons.urls', namespace='coupons', app_name='coupons')),
    url(r'^shop/', include('shop.urls', namespace='shop', app_name='shop')),
    url(r'^graphql', GraphQLView.as_view(graphiql=True, schema=schema))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
