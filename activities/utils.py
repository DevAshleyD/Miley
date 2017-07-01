from django.contrib.contetntypes.models import ContentType
from .models import Activity

def create_activity(user, verb, target=None):
    now = timezone.now()
    last_minute = now - datetime.timedelta(seconds=60)
    similar_activities = Activity.objects.filter(user_id=user.id,
        verb=verb, created__gte=last_minute)
    activity.save()
