import graphene
from graphene_django.types import DjangoObjectType
from .models import Category, Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product

class Query(graphene.AbstractType):
    all_products = graphene.List(ProductType)

    def resolve_all_products(self, args, context, info):
        return Product.objects.all()
