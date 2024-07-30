from django.shortcuts import render

from rest_framework import generics
from apps.forum.models import Post, PostComment
from apps.forum.serializers import PostSerializer, PostCommentSerializer
# Create your views here.
class PostAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by("-created")
    serializer_class = PostSerializer


class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all().order_by("-created")
    serializer_class = PostSerializer

    lookup_field = "pk"


class PostCommentAPIView(generics.ListCreateAPIView):
    queryset = PostComment.objects.all().order_by("-created")
    serializer_class = PostCommentSerializer

    def get_queryset(self):
        post = self.request.query_params.get("post")
        comment = self.request.query_params.get("comment")

        if post and comment:
            return self.queryset.filter(id=comment, post_id=post)
        elif post:
            return self.queryset.filter(post_id=post)
        return super().get_queryset()

class PostCommentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PostComment.objects.all().order_by("-created")
    serializer_class = PostCommentSerializer

    lookup_field = "pk"