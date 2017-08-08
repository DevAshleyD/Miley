from django.test import TestCase
from .models import Video
from django.contrib.auth.models import User
from psycopg2 import IntegrityError

class VideoTestCase(TestCase):
    _author = None

    def setUp(self):
        self._author = User.objects.create(username='testuser', password='pass')

    def test_video_created_with_defaults(self):
        """
        Create video with defaults:
            - private
            - slug
        """

        # Fail
        # with self.assertRaises(IntegrityError) as e:
        #     Video.objects.create(title='Test video', picture='')

        video = Video.objects.create(title='Test video', picture='', author=self._author)
        self.assertEqual(video.author.id, self._author.id)
