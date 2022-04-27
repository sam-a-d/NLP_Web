from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def ml_model(request):
    return HttpResponse("Its up and running")