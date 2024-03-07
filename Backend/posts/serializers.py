from rest_framework import serializers
from .models import Post, User, PostImage
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import pdb


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name',
                  'email', 'user_bio', 'profile_pic', 'posts', 'liked')


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ['id', 'post', 'image']


class PostSerializer(serializers.ModelSerializer):
    author_profile_pic = serializers.ImageField(
        read_only=True, source='author.profile_pic')
    author_username = serializers.CharField(
        read_only=True, source='author.username')
    author_first_name = serializers.CharField(
        read_only=True, source='author.first_name')
    author_last_name = serializers.CharField(
        read_only=True, source='author.last_name')
    title = serializers.CharField(required=False)

    images = PostImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(
            max_length=1000000, allow_empty_file=False, use_url=False),
        write_only=True, required=False)
    deleted_images = serializers.ListField(write_only=True, required=False)

    liked = serializers.IntegerField(write_only=True, required=False)
    disliked = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'date_posted', 'author', 'author_profile_pic',
                  'author_username', 'author_first_name', 'author_last_name', 'likes',
                  'images', 'uploaded_images', 'deleted_images', 'liked', 'disliked')

    def create(self, validated_data):
        uploaded_images = []
        if "uploaded_images" in validated_data:
            uploaded_images = validated_data.pop("uploaded_images")
        likes = validated_data.pop("likes")
        post = Post.objects.create(**validated_data)
        for image in uploaded_images:
            newpost_image = PostImage.objects.create(post=post, image=image)
        return post

    def update(self, instance, validated_data):
        uploaded_images = []
        if "uploaded_images" in validated_data:
            uploaded_images = validated_data.pop("uploaded_images")
        deleted_images = []
        if "deleted_images" in validated_data:
            deleted_images = validated_data.pop("deleted_images")

        if "disliked" in validated_data:
            disliked = validated_data.pop("disliked")
            instance.likes.remove(disliked)
            instance.save()

        elif "liked" in validated_data:
            liked = validated_data.pop("liked")
            instance.likes.add(liked)
            instance.save()

        post = super().update(instance, validated_data)

        for image in uploaded_images:
            newpost_image = PostImage.objects.create(post=post, image=image)

        for image in deleted_images:
            PostImage.objects.filter(id=image).delete()

        return post


class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2',
                  'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
