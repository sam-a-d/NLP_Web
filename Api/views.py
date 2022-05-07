from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


from Blog.models import Post
from .serializer import PostSerializer, PostDetailSerializer
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
        post = Post.objects.filter(pk = pk)
    except Post.DoesNotExist:
        return HttpResponse(status = 404)

    if request.method == 'GET':
        
        serializer = PostDetailSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)