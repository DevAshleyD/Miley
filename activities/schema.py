import graphene
from graphene_django.types import DjangoObjectType
from .models import Activity

class ActivityType(DjangoObjectType):
    class Meta:
        model = Activity

class Query(graphene.AbstractType):
    all_activities = graphene.List(ActivityType)

    def resolve_all_activities(self, args, context, info):
        return Activity.objects.all()
