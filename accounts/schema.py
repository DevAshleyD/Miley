import graphene
from graphene_django.types import DjangoObjectType
from .models import Contact, Profile

class ContactType(DjangoObjectType):
    class Meta:
        model = Contact

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
        return Profile.objects.all()
