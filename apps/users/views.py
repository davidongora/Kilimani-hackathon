from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from apps.users.models import User
from apps.users.serializers import RegisterUserSerializer, UsersSerializer
from apps.core.constants import UserRolesEnum


# Create your views here.
class RegisterUserAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            user.set_password(user.password)
            user.save()
            if user.role == UserRolesEnum.ADMIN_USER:
                user.is_staff = True
                user.is_superuser = True
                user.save()
            return Response(
                {"message": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Customer":
            return self.queryset.filter(id=user.id)
        return super().get_queryset()
