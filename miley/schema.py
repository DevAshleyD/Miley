import graphene
import accounts.schema

class Query(accounts.schema.Query, graphene.ObjectType):
    # Inherit multiple queries
    pass

schema = graphene.Schema(query=Query)
