from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics, status
from apps.forum.models import Post, PostComment, Poll, PollChoice
from apps.forum.serializers import PostSerializer,PollVoteSerializer, PostCommentSerializer, PollSerializer, PollChoiceSerializer
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


class PollAPIView(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer


class PollDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

    lookup_field = "pk"


class PollChoiceAPIView(generics.ListCreateAPIView):
    queryset = PollChoice.objects.all()
    serializer_class = PollChoiceSerializer

class PollVoteAPIView(generics.CreateAPIView):
    serializer_class = PollVoteSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            choice_id = serializer.validated_data.get("choice")
            poll_choice = PollChoice.objects.get(id=choice_id)
            poll_choice.votes += 1
            poll_choice.save()
            return Response({"success": "Vote successfully submitted"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

def blog_posts(request):
    posts = Post.objects.all().order_by("-created")
    context = {
        "posts": posts
    }
    return render(request, "posts/posts.html", context)