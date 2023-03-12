from rest_framework import serializers
from Blog.models import Post, Comment
import json
from django.http import JsonResponse

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
   
    # comments serializer is called to obtain related comments with the post
    comments = CommentSerializer(many=True, read_only = True)

    # my field is a custom field that would add to the serializer
    # Adding custom field to the serializer

    custom_field = serializers.SerializerMethodField('get_sentiment_analysis_res')


    def get_sentiment_analysis_res(self, Post):

        # getting the comments related to this post
        # the comments will be feed in to sentiment analysis

        comments = Post.comments.all()
        related_comments = [com.content for com in comments]

        # analyse sentiment using machine learning model
        senti = Sentiment_analysis()
        comment_analysis_result = senti.get_comment_analysis(related_comments)
        print('comment_analysis_result', comment_analysis_result)
        
        # return comments statistics that recived from the sentiment analysis
        return {'comment_stats' : comment_analysis_result, 'samad_demo' : comment_analysis_result['all_sentiments']}

    class Meta:
        model = Post
        fields = ['id', 'title', 'created' ,'content', 'comments', 'custom_field']

class SentenceAnalysisSerializer(serializers.Serializer):
    sentiment_class = serializers.CharField(read_only = True)


class VoiceRecognitionSerializer(serializers.Serializer):
    voice_text = serializers.CharField(read_only = True)
