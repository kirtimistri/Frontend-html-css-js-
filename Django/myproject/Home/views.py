from django.shortcuts import render,HttpResponse
from datetime import datetime
from django.db import IntegrityError
from Home.models import Contact
from django.contrib import messages

def index(request):
    context={
        "var1":"this change is made in views.py",
        "var2":"thsi code is written to assign and change the velue of veriable"
        #"veriablekanam":"uski value"
    }
    return render(request,'index.html',context)
#context database mai se veriable banake uski value fetch kar ke usko dikhayenge
    #jo tamplate folder banaya hai vaha ek index.html hai usmai login page ka code hai  usko ek 
    #ek veriable bana diya context ye set of veriable hai jo tamplate mai bheja jata hai
def about(request):
    return render(request,'about.html')
    #return HttpResponse("this is about page")
def servises(request):
    return render(request,'servises.html')
    #return HttpResponse("this is servises page")
def contact(request):
    #contact info ko user se le ke data base mai add karne ki info
    if request.method =="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        Phone=request.POST.get('Phone')
        desc=request.POST.get('desc')
        #object of Contact
        contact=Contact(name=name,email=email,Phone=Phone,desc=desc,date=datetime.today())
        contact.save()
        messages.success(request,'Your message hasbeen sent!')
    return render(request,'contact.html')
    #return HttpResponse("this is contact page")
def login(request):
   return render(request,'login.html')
# Create your views here.
