from django.test import TestCase
from django.contrib.auth.models import User
from .models import Activity

class ActivityTestCase(TestCase):
    _user = None

    def setUp(self):
        self._user = User.objects.create(username='testuser', password='pass')

    def test_create_activity(self):
        target = User.objects.create(username='targetuser', password='pass')
        activity = Activity(user=self._user, verb='test activity', target=target)

        activity.save()
        self.assertNotEqual(activity.id, None)
        self.assertEqual(activity.verb, 'test activity')
        self.assertEqual(activity.user.id, self._user.id)
        self.assertEqual(activity.target_id, target.id)
