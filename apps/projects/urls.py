from django.urls import path
from apps.projects.views import ProjectAPIView, ProjectDetailAPIView, ProjectDiscussionAPIView, ProjectDiscussionDetailAPIView

urlpatterns = [
    path("", ProjectAPIView.as_view(), name="projects"),
    path("<int:pk>/", ProjectDetailAPIView.as_view(), name="project-details"),
    path("project-discussions/", ProjectDiscussionAPIView.as_view(), name="project-discussions"),
    path("project-discussions/<int:pk>/", ProjectDiscussionDetailAPIView.as_view(), name="project-discussion-details"),
]