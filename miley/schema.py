import graphene
#import accounts.schema
#import activities.schema
#import shop.schema
#
#class Query(accounts.schema.Query,
        #shop.schema.Query,
        #activities.schema.Query,
        #graphene.ObjectType):
    ## Inherit multiple queries
    #pass
#

# TODO: Remove this
from django.db import models

class SomeModel(models.Model):
    some_counter  = models.IntegerField(db_index=True)
    pass

class SomeModelType(DjangoObjectType):
    class Meta:
        model = SomeModel


class MockQuery(graphene.AbstractType):
    all_models = graphene.List(SomeModelType)

    def resolve_all_models(self, args, context, info):
        return list()

class Query(MockQuery):
    pass

schema = graphene.Schema(query=Query)
