from django.shortcuts import render,HttpResponse,redirect
from datetime import datetime
from django.utils import timezone
from django.contrib.auth.models import User
from home.models import Contact
from django.contrib.auth import authenticate
from django.contrib.auth.models import AnonymousUser 
from django.contrib.auth import logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.urls import reverse

def infotechhome(request):
    # if not request.user.is_authenticated:
        #  return redirect(request,'login.html')
        #  return redirect(loginuser)
    # Your view logic here
    return render(request,'home.html')
def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        email = request.POST.get('email')
        contact = Contact(name=name,email=email,desc=desc,phone=phone)
        contact.save()
    return render(request,'contact.html')
    # return HttpResponse("this is contact page")

def buy(request):
     if not request.user.is_authenticated:
        #  return redirect(request,'login.html')
         return render(request,'Login.html')  
     else:   
      return HttpResponse("this is cource buy page")
def loginuser(request):
    if request.method == "POST":
        print("loginuser is used by buy function in views")
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)
        print(password)
        user = authenticate(username=username, password=password)
        if user is not None:
          return render(request,'home.html')
        #   return HttpResponse("log in sucsess")
        else:
    # No backend authenticated the credentials
         return render(request,'signup.html')
        #  return HttpResponse("Retry")
        # chaeck that user 
        # has corect pass and email
    # return render(request,'login.html')
    return HttpResponse("log out sucsess")
def logoutuser(request):
    logout(request)
    return HttpResponse("log out sucsess")
def signupuser(request):
    if request.method == "POST":
        username =request.POST.get('username')
        email =request.POST.get('email')
        phone = request.POST.get('phone')
        password= request.POST.get('password')
        user=User.objects.create(username=username,email=email,phone=phone)
        #for password incription 
        user.set_password(password)
        user.save()
        return redirect('/signup')

    return render(request,'signup.html')
def newcourse(request):
    return HttpResponse("this is new cource page")
def aboutus(request):
    return HttpResponse("this is about us  page")
