from django.contrib import admin
from django.urls import path, include
from .views import get_csrf_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('allauth.urls')),
    path('auth/csrf/', get_csrf_token),
]
