from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/recipes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of recipes'
        },
        {
            'Endpoint': '/categories/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of categories'
        },
        {
            'Endpoint': '/categories/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of a single category recipes'
        },
        {
            'Endpoint': '/recipes/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single recipe'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_recipes(request):
    categories = Recipe.objects.all()
    serializer = RecipeSerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_category(request, pk):
    recipes = Recipe.objects.filter(category_id=pk)
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_recipe(request, slug):
    try:
        recipe = Recipe.objects.get(slug=slug)
    except Recipe.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)

