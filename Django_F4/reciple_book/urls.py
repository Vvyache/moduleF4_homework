from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('recipes/', views.get_recipes, name="recipes"),
    path('categories/', views.get_categories, name="categories"),
    path('categories/<int:pk>/', views.get_category, name="category"),
    path('recipes/<str:slug>/', views.get_recipe, name="recipe"),
]

