from django.test import TestCase
from .models import Category, Product

class ShopCategoryTestCase(TestCase):

    def setUp(self):
        pass

    def test_create_category(self):
        """
        Create a category
        """
        category = Category(name='testcategory', slug='testcategory')
        category.save()

        self.assertNotEqual(category.id, None)
