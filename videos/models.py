from django.db import models
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Video(models.Model):
    slug = models.SlugField(max_length=200, db_index=True)
    author = models.ForeignKey(User, related_name='user_videos')
    published = models.BooleanField(default=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    url = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='public/images/%Y/%m/%d', blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('created',)
        verbose_name = 'Video'
        verbose_name_plural = 'videos'

    def __str__(self):
        return 'Video by {}: {}'.format(self.author, self.title)

    def get_absolute_url(self):
        return reverse('videos:watch', args=[self.slug])
