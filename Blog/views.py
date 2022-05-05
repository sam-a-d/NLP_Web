from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.contrib.auth.models import User

# defied modules
from .models import Post, Comment
from ml_models.nlp_models import Sentiment_analysis

# Create your views here.
def blog(request):
    posts = Post.objects.all()

    
    context = {
        'posts' : posts
    }

    return render(request, 'blog/blog-single.html', context )



class BlogListView(ListView):
    model = Post
    template_name = "blog/blog-list.html"
    context_object_name = 'posts'


class BlogDetailView(DetailView):
    model = Post
    template_name = "blog/blog-single.html"
    context_object_name = 'post'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["comments"] = Comment.objects.filter(post_id = self.kwargs.get('pk'))
        return context
    

# still working on this
def create_comment(request):
    if request.method == "POST":
        next = request.POST.get('next', '/')
        post_id = request.POST.get('post_id')

        related_post = Post.objects.get(id = post_id)
        comment = request.POST['comment']

        if request.user.is_authenticated:
            user = request.user
        else:
            user = User.objects.get(id = 2)
        
        if comment:
            Comment.objects.create(post_id = related_post, commenter=user, content = comment)

     
        return HttpResponseRedirect(next)

    return HttpResponse('Something went wrong')
