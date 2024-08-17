from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request,'logincard.html')
def home(request):
    return render(request,'index.html')
def about(request):
    return render(request,'about.html')
def contact(request):
    return render(request,'contact.html')
def service(request):
    return render(request,'service.html')
def signin(request):
    return render(request,'signin.html')
