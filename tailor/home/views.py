from django.shortcuts import render, redirect
from .models import User
from django.http import JsonResponse
from django.http import HttpResponse
import datetime
# Create your views here.
def signin(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        phone_number = request.POST.get('phone_number')
        address = request.POST.get('address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        zip_code = request.POST.get('zip_code')

        # Generate user_id (firstname + phone_number + zip_code)
        user_id = f"{first_name}{phone_number}{zip_code}"
        print(user_id)
        # Create new User object
        new_user = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            phone_number=phone_number,
            address=address,
            city=city,
            state=state,
            zip_code=zip_code
        )

        # Save the User object to the database
        new_user.save()

        # Redirect to a success page or return a JSON response
        return JsonResponse({'success': True, 'user_id': user_id})
        # return HttpResponse(f"{'success': {True}, 'user_id': {user_id}}")

    return render(request, 'signin.html')
# def login(request):
#     return render(request,'logincard.html')
def home(request):
    return render(request,'index.html')

def contact(request):
    return render(request,'contact.html')

def signin(request):
    return render(request,'signin.html')
