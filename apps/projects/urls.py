from django.urls import path
from apps.projects.views import ProjectAPIView, ProjectDetailAPIView, ProjectDiscussionAPIView, ProjectDiscussionDetailAPIView
from apps.projects.views import projects_list, projects_details, create_comment
urlpatterns = [
    path("", ProjectAPIView.as_view(), name="projects"),
    path("projects-list/", projects_list, name="projects-list"),
    path("products-list/<int:id>/", projects_details, name="project-details"),
    path("project-comment/", create_comment, name="project-comment"),
    path("project-discussions/", ProjectDiscussionAPIView.as_view(), name="project-discussions"),
    path("project-discussions/<int:pk>/", ProjectDiscussionDetailAPIView.as_view(), name="project-discussion-details"),
]