import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'miley.settings')
app = Celery('miley', broker=os.environ.get('RABBITMQ_URI', 'amqp://test:test@localhost/miley'))
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
