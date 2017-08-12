import graphene
import accounts.schema
import activities.schema
import shop.schema

class Query(accounts.schema.Query,
        shop.schema.Query,
        activities.schema.Query, 
        graphene.ObjectType):
    # Inherit multiple queries
    pass

schema = graphene.Schema(query=Query)
