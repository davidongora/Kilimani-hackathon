from enum import Enum

class UserRolesEnum(Enum):
    ADMIN_USER = "Admin"
    USER = "User"

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]