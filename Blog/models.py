from django.db import models

# Create your models here.

class Post(models.Model):

    author_id = models.IntegerField(default=1)
    title = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.TimeField(auto_now=True)
    content = models.TextField()


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})


class Category(models.Model):

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Category_detail", kwargs={"pk": self.pk})

class Comment(models.Model):

    post_id = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.TimeField(auto_now=True)
    content = models.TextField()

    def __str__(self):
        return self.content

    def get_absolute_url(self):
        return reverse("Comment_detail", kwargs={"pk": self.pk})
