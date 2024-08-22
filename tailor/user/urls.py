from django.urls import path
from user.views import*

urlpatterns = [
    path('',user,name='user'),
]