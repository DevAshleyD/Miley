import graphene
from graphene_django.types import DjangoObjectType
from .models import Category, Product

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category

class ProductType(DjangoObjectType):
    class Meta:
        model = Product

class Query(graphene.AbstractType):
    all_categories = graphene.List(CategoryType)
    all_products = graphene.List(ProductType)

    def resolve_all_categories(self, args, context, info):
        return Category.objects.select_related('product')

    def resolve_all_products(self, args, context, info):
        return Product.objects.all()
