from django.test import TestCase
from django.db.utils import IntegrityError as UtilsIntegrityError
from psycopg2 import IntegrityError
from django.contrib.auth.models import User
from .models import Profile

class AccountsTestCase(TestCase):
    _user = None

    def setUp(self):
        self._user = User.objects.create(username='testuser', password='pass')

    def test_will_not_create_profile_without_user(self):
        profile = Profile(profile_type=0)
        self.assertEqual(profile.id, None)

        try:
            profile.save()
        except(UtilsIntegrityError, IntegrityError) as err:
            self.assertEqual(profile.id, None)
            self.assertEqual(profile.user_id, None)


    def test_create_profile(self):
        profile = Profile(profile_type=0, user=self._user)
        profile.save()
        self.assertNotEqual(profile.id, None)
        self.assertNotEqual(profile.user_id, None)
