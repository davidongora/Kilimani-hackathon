from django.db import models
from apps.core.models import AbstractBasseModel
# Create your models here.
class Report(AbstractBasseModel):
    title = models.CharField(max_length=255)
    report_type = models.CharField(max_length=255)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title