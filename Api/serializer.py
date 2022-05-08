from rest_framework import serializers
from Blog.models import Post, Comment
import json

from ml_models.nlp_models import Sentiment_analysis

class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"



class PostDetailSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only = True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'created' ,'content', 'comments',]