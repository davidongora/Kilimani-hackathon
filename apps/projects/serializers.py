from rest_framework import serializers
from apps.projects.models import Project, ProjectDiscussion

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

class ProjectDiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDiscussion
        fields = "__all__"