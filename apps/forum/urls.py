from django.urls import path
from apps.forum.views import PostAPIView, PostDetailAPIView, PostCommentAPIView, PostCommentDetailAPIView

urlpatterns = [
    path("posts/", PostAPIView.as_view(), name="posts"),
    path("posts/<int:pk>/", PostDetailAPIView.as_view(), name="post-details"),
    path("posts/comments/", PostCommentAPIView.as_view(), name="post-comments"),
    path("posts/comments/<int:pk>/", PostCommentDetailAPIView.as_view(), name="post-comment-details"),
]