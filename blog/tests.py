from django.test import TestCase
from django.contrib.auth.models import User
from blog.models import Post

# Create your tests here.
class BlogPostTestCase(TestCase):
    _author = None

    def setUp(self):
        self._author = User.objects.create(username='testuser', password='pass')
        for i in range(0, 10):
            Post.objects.create(title='Post number {}'.format(i),
                slug='post-number-{}'.format(i),
                author=self._author)

    def test_posts_created(self):
        """
        Posts were successfully created
        """
        posts = Post.objects.all()

        self.assertEqual(posts.count(), 10)
