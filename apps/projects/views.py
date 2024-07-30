from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics, status

from apps.projects.models import Project, ProjectDiscussion
from apps.projects.serializers import ProjectSerializer, ProjectDiscussionSerializer
# Create your views here.
class ProjectAPIView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    lookup_field = "pk"

class ProjectDiscussionAPIView(generics.ListCreateAPIView):
    queryset = ProjectDiscussion.objects.all()
    serializer_class = ProjectDiscussionSerializer

    def get_queryset(self):
        project = self.request.query_params.get("project")
        comment = self.request.query_params.get("comment")

        if project and comment:
            return self.queryset.filter(project_id=project, parent=comment)
        elif project:
            return self.queryset.filter(project_id=project)
        return super().get_queryset()

class ProjectDiscussionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProjectDiscussion.objects.all()
    serializer_class = ProjectDiscussionSerializer

    lookup_field = "pk"