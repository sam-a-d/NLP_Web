from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def recognize_text(request):
    return HttpResponse('Working fine')