from django.urls import path
from service.views import*

urlpatterns = [
    path('',service,name='home'),

]
