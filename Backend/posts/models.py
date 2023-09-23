from django.db import models
from django.contrib.auth.models import AbstractUser
from autoslug import AutoSlugField


class User(AbstractUser):
    first_name = models.CharField(max_length=150, blank=False)
    last_name = models.CharField(max_length=150, blank=False)
    email = models.EmailField(blank=False)
    user_bio = models.CharField(max_length=500, blank=True)
    profile_pic = models.ImageField(
        default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.username} profile'


class Post(models.Model):
    title = models.CharField(max_length=100, blank=True)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts')
    likes = models.ManyToManyField(User, related_name='liked', blank=True)


class PostImage(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="post_images", null=True, blank=True)


class Tag(models.Model):
    tag = models.CharField(max_length=20)
    posts = models.ManyToManyField(Post, related_name='tags', blank=True)
    slug = AutoSlugField(populate_from=('tag'), unique=True, max_length=50)
