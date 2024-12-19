from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from datetime import datetime
class Contact(models.Model):
      name=models.CharField(max_length=122)
      phone=models.CharField(max_length=122)
      email=models.CharField(max_length=122)
      desc=models.TextField()
      def __str__(self):
         return self.name



# Create your models here.