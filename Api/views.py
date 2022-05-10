from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


from Blog.models import Post, Comment
from .serializer import *
from ml_models.nlp_models import Sentiment_analysis
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
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostDetailSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.error, status=400)
        


@csrf_exempt
def comments(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many = True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CommentSerializer(data= data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.error, status=400)

@csrf_exempt
def SentenceAnalysis(request):
    senti = Sentiment_analysis()
    
    if request.method == 'POST':
        data = JSONParser().parse(request)
        sentence = data["sentence"]
        res = senti.get_sentence_analysis(sentence)
        serializer = SentenceAnalysisSerializer(res)
        return JsonResponse(serializer.data)
