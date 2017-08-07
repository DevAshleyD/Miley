from django.conf import settings
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.db import models
from urllib.request import urlopen, urlretrieve

class Contact(models.Model):
    user_from = models.ForeignKey(User, related_name='rel_from_set')
    user_to = models.ForeignKey(User, related_name='rel_to_set')
    created = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        ordering = ('-created',)

class Profile(models.Model):
    user = models.OneToOneField(User)
    profile_type = models.IntegerField(db_index=True)
    birth_date = models.DateField(blank=True, null=True)
    picture = models.ImageField(max_length=255, upload_to='public/images/%Y/%m/%d', blank=True)

    def __str__(self):
        return 'Profile for user {}'.format(self.user.username)

    def get_absolute_url(self):
        return reverse('user_detail', args=[self.user.username])

    def remote_picture(self, url):
        pass

# Add the following field to User dynamically
User.add_to_class('following', models.ManyToManyField('self', through=Contact,
    related_name='followers', symmetrical=False))
