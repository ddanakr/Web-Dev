from django.urls import path, include
# from .views import CategoryViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter
# from .views.generics import CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView, ProductListAPIView, ProductDetailAPIView
from api import views

# router = DefaultRouter()

# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)


urlpatterns = [
    # path('', include(router.urls))
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
]