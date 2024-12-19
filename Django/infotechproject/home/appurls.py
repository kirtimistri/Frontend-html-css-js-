from django.contrib import admin
from django.urls import path,include
from home import views
#ye app ke urls.py se li huyi req yaha bhej dega app.urls
urlpatterns = [
    path("",views.infotechhome,name='home'),#agar  blank path ki koi req app url ke pass ayeto usko views ke infotechhome function ko run karke dikhao our is path ka nam home rakh do
    #agar  blank path ki koi req app url ke pass ayeto usko views ke infotechhome function ko run karke dikhao our is path ka nam home rakh do
    path("home",views.infotechhome,name='home'),#agar  blank path ki koi req app url ke pass ayeto usko views ke infotechhome function ko run karke dikhao our is path ka nam home rakh do
    path("contact",views.contact,name='contact'),
    path("login",views.loginuser,name='login'),
    path("logout",views.logoutuser,name='logout'),
    path("signup",views.signupuser,name='signup'),
    path("buy",views.buy,name='buy'),
    path("newcourse",views.newcourse,name='newcource'),
    path("aboutus",views.aboutus,name='aboutus')
]
