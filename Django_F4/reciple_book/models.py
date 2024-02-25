from django.db import models


class Category(models.Model):
    SALADS = 'САЛАТЫ'
    FIRST_COURSES = 'ПЕРВЫЕ БЛЮДА'
    SECOND_COURSES = 'ВТОРЫЕ БЛЮДА'
    DESSERT = 'ДЕСЕРТЫ'

    CATEGORIES = [
        (SALADS, 'САЛАТЫ'),
        (FIRST_COURSES, 'ПЕРВЫЕ БЛЮДА'),
        (SECOND_COURSES, 'ВТОРЫЕ БЛЮДА'),
        (DESSERT, 'ДЕСЕРТЫ'),
    ]

    name = models.CharField(max_length=20, choices=CATEGORIES, default=SALADS)
    slug = models.SlugField(max_length=20, default='salads')

    def __str__(self):
        return self.name

    @staticmethod
    def get_categories():
        return [choice[0] for choice in Category.CATEGORIES]


class Recipe(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    title = models.CharField('Title', max_length=128)
    descriptions = models.TextField('Descriptions', null=True, blank=True)
    slug = models.SlugField(max_length=250)

    def __str__(self):
        return f'{self.category.name} | {self.title}'

