from django.db import models
from django.contrib.auth.models import AbstractUser
from apps.core.models import AbstractBasseModel
# Create your models here.
USER_ROLES = (
    ("Admin", "Admin"),
    ("User", "User"),
)

class User(AbstractUser, AbstractBasseModel):
    role = models.CharField(max_length=255, choices=USER_ROLES)
    phone_number = models.CharField(max_length=255)

    def __str__(self):
        return self.username