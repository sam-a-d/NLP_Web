from django.shortcuts import render, HttpResponse

# Create your views here.
def blog(request):
    return render(request, 'blog/blog-single.html')