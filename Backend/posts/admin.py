from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


class CustomUserAdmin(UserAdmin):
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Custom Field Heading',
            {
                'fields': (
                    'user_bio',
                    'profile_pic'
                ),
            },
        ),
    )


admin.site.register(User, CustomUserAdmin)
