from django.urls import path
from apps.forum.views import PostAPIView, PollVoteAPIView, PostDetailAPIView, PostCommentAPIView, PostCommentDetailAPIView, PollAPIView, PollDetailAPIView, PollChoiceAPIView
from apps.forum.views import blog_posts
urlpatterns = [
    path("posts/", blog_posts, name="posts"),
    path("posts/<int:pk>/", PostDetailAPIView.as_view(), name="post-details"),
    path("posts/comments/", PostCommentAPIView.as_view(), name="post-comments"),
    path("posts/comments/<int:pk>/", PostCommentDetailAPIView.as_view(), name="post-comment-details"),
    path("polls/", PollAPIView.as_view(), name="polls"),
    path("polls/<int:pk>/", PollDetailAPIView.as_view(), name="poll-details"),
    path("poll-choices/", PollChoiceAPIView.as_view(), name="poll-choices"),
    path("vote-on-poll/", PollVoteAPIView.as_view(), name="vote-on-poll"),
]