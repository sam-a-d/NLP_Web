from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


from Blog.models import Post
from .serializer import *
# Create your views here.

def api(request):
    return HttpResponse('Working fine...')


@csrf_exempt
def post_api(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def post_detail(request, pk):
    
    try:
        post = Post.objects.get(pk = pk)
    except Post.DoesNotExist:
        return HttpResponse(status = 404)

    if request.method == 'GET':
        
        serializer = PostDetailSerializer(post)
        return JsonResponse(serializer.data)

@csrf_exempt
def article_comments_analysis(request):
    demo = {
        'name' : 'Abdus',
        'age' : '24'
    }
    
    obj = Geeks(demo)
    serializer = GeeksSerializer(obj)

    return JsonResponse(serializer.data)