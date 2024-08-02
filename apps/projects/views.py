from django.shortcuts import render, redirect

from rest_framework.response import Response
from rest_framework import generics, status
from django.db.models import Q

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


def projects_list(request):
    projects = Project.objects.all()
    if request.method == "POST":
        search_text = request.POST.get("search_text")
        projects = Project.objects.filter(Q(name__icontains=search_text))
    context = {
        "projects": projects
    }
    return render(request, "projects/projects.html", context)

def projects_details(request, id):
    project = Project.objects.get(id=id)
    comments = project.projectcomments.all().order_by("-created")
    context = {
        "project": project,
        "comments": comments
    }
    return render(request, "projects/project_details.html", context)


def create_comment(request):
    if request.method == "POST":
        message = request.POST.get("message")
        author = request.POST.get("author")
        project_id = request.POST.get("project")

        ProjectDiscussion.objects.create(
            content=message,
            project_id=project_id,
            commentor=author
        )
        return redirect(f"/projects/projects-list/{project_id}")
    return render(request, "projects/project_comment.html")