from datetime import timedelta
from django.utils import timezone
from django.contrib.contenttypes.models import ContentType
from .models import Activity

def create_activity(user, verb, target=None):
    now = timezone.now()
    last_minute = now - timedelta(seconds=60)
    similar_activities = Activity.objects.filter(user_id=user.id,
        verb=verb, created__gte=last_minute)

    if target:
        target_ct = ContentType.objects.get_for_model(target)
        similar_activities = similar_activities.filter(target_ct=target_ct,
            target_id=target.id)

    # Avoid duplications
    if not similar_activities:
        activity = Activity(user=user, verb=verb, target=target)
        activity.save()
        return True

    return False
