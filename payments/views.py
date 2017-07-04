from django.shortcuts import render, get_object_or_404
from django.conf import settings
from django.core.urlresolvers import reverse
from django.views.decorators.csrf import csrf_exempt
from paypal.standard.forms import PayPalPaymentsForm
from shop.models import Order
from decimal import Decimal

def payment_process(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Order, id=order_id)
    host = request.get_host()

    paypal_payload = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '{:.2f}'.format(order.get_total_cost().quantize(Decimal('.01'))),
        'item_name': 'Order {}'.format(order.id),
        'invoice': str(order.id),
        'currency_code': 'USD',
        'notify_url': 'http://{}{}'.format(host, reverse('paypal-ipn')),
        'return_url': 'http://{}{}'.format(host, reverse('payments:done')),
        'cancel_return': 'http://{}{}'.format(host, reverse('payments:canceled')),
    }
    form = PayPalPaymentsForm(initial=paypal_payload)
    return render(request, 'payments/process.html', {'order': order,
        'form': form})

@csrf_exempt
def payment_done(request):
    return render(request, 'payments/done.html')

@csrf_exempt
def payment_canceled(request):
    return render(request, 'payments/canceled.html')
