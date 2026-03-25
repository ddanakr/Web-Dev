from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Category, Product


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    product_json = product.to_json()
    return JsonResponse(product_json, safe=False)


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    category_json = category.to_json()
    return JsonResponse(category_json, safe=False)


def products_by_category(request, id):
    category = get_object_or_404(Category, pk=id)

    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
