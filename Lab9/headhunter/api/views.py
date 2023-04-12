from django.shortcuts import render
from django.http import JsonResponse

from api.models import Company, Vacancy

# Create your views here.


def companies(request):
    products = Company.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)
