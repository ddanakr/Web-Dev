from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets, filters, generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ProductFilter


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()

        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    name = 'products'
    search_fields = (
        '^name',
    )

    # filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    # ordering_fileds = ['price']
    # filterset_class = ProductFilter