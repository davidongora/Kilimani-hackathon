from django.db import models
from django.contrib.auth.models import AbstractUser
from apps.core.models import AbstractBasseModel
from apps.core.constants import UserRolesEnum
# Create your models here.
USER_ROLES = (
    ("Admin", "Admin"),
    ("User", "User"),
)

GENDER_CHOICES = (
    ("Male", "Male"),
    ("Female", "Female"),
)

class User(AbstractUser, AbstractBasseModel):
    role = models.CharField(max_length=255, choices=UserRolesEnum.choices())
    phone_number = models.CharField(max_length=255)
    gender = models.CharField(max_length=255, choices=GENDER_CHOICES, null=True)

    def __str__(self):
        return self.username