from django.urls import path
from rest_framework import routers
from .views import PostViewSet, PostDetail, MyTokenObtainPairView, RegisterView, ProfileView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('post/<int:pk>/', PostDetail.as_view()),
    path('profile/<int:pk>/', ProfileView.as_view()),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='user-register')
]

router = routers.SimpleRouter()
router.register(r'posts', PostViewSet)

urlpatterns += router.urls
