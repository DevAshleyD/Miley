import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import User
from .models import Contact, Profile

class ContactType(DjangoObjectType):
    class Meta:
        model = Contact

class UserType(DjangoObjectType):
    class Meta:
        model = User

class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile

class Query(graphene.AbstractType):
    all_contacts = graphene.List(ContactType)
    all_profiles = graphene.List(ProfileType)

    def resolve_all_contacts(self, args, context, info):
        # Optimize the query
        return Contact.objects.select_related('profile')

    def resolve_all_profiles(self, args, context, info):
        # user = get_object_or_404(User, username=username)
        # products = Product.objects.filter(user=user)
        return Profile.objects.select_related('user')
