from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.contrib.auth import logout

def index(request):
    print(request.user)
    if request.user.is_anonymous:
     return redirect("/login")
    return render (request,'index.html')
def loginuser(request):
     if request.method == "POST":
        username= request.POST.get('username')
        password= request.POST.get('password')
        user = authenticate(username=username, password=password)
        print(username,password)
        if user is not None:
          login(request,user)
    # A backend authenticated the credentia
          return redirect("/")
        else:
    # No backend authenticated the credentials
          return render (request,'login.html')
     return render (request,'login.html')
def logoutuser(request):
     logout(request)
     return redirect("/login")
# Create your views here.
#kirti@8652-password