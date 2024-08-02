from django.db import models
from apps.core.models import AbstractBasseModel
# Create your models here.
class Project(AbstractBasseModel):
    name = models.CharField(max_length=500)
    location = models.CharField(max_length=255)
    client = models.CharField(max_length=255)
    contractor = models.CharField(max_length=255)
    proposed_start_date = models.DateField(null=True)
    image = models.ImageField(upload_to="project_images/", null=True)
    project_plan = models.FileField(upload_to="project_plans/", null=True)
    nema_report = models.FileField(upload_to="nema_reports/", null=True)
    eaa_report = models.FileField(upload_to="eaa_reports/", null=True)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name


class ProjectDiscussion(AbstractBasseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="projectcomments")
    commentor = models.CharField(max_length=255, null=True)
    content = models.TextField(null=True)
    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name='replies')
    likes = models.IntegerField(default=0)
    support_file = models.FileField(upload_to="comments_files/", null=True)

    def __str__(self):
        return self.project.name