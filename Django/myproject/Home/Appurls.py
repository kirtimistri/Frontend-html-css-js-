from django.contrib import admin
from django.urls import path
from Home import views
#ye app ke url req ko handle kerega
#''for string "" for path
urlpatterns = [
    path("",views.index,name='Home'),#agar  blank path ki koi req app url ke pass ayeto usko views 
    path("index",views.index,name='Home'),#agar  blank path ki koi req app url ke pass ayeto usko views 
    path("about",views.about,name='about'),#agar  blank path ki koi req app url ke pass ayeto usko views 
    path("servis",views.servises,name='Servis'),#agar  blank path ki koi req app url ke pass ayeto usko views 
    path("contact",views.contact,name='contact'),#agar  blank path ki koi req app url ke pass ayeto usko views 
    path("login",views.login,name='Login page')#agar  blank path ki koi req app url ke pass ayeto usko views 
    #ke index function ko run kar ke dikhao 
]
