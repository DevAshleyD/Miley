from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.product_list, name='product_list'),
    url(r'^stores.json', views.shop_list_json, name='shop_list_json'),
    url(r'^(?P<category_slug>[-\w]+)/$', views.product_list, name='product_list_by_category'),
    url(r'^(?P<id>\d+)/(?P<slug>[-\w]+)/$', views.product_detail, name='product_detail'),
    url(r'^cart$', views.cart_detail, name='cart_detail'),
    url(r'^cart/add/(?P<product_id>\d+)/$', views.cart_add, name='cart_add'),
    url(r'^cart/remove/(?P<product_id>\d+)/$', views.cart_remove, name='cart_remove'),
    url(r'^orders/create/$', views.order_create, name='order_create'),
    url(r'^admin/order/(?P<order_id>\d+)/$', views.admin_order_detail, name='admin_order_detail'),
    url(r'^admin/order/(?P<order_id>\d+)/pdf/$', views.admin_order_pdf, name='admin_order_pdf'),
]
