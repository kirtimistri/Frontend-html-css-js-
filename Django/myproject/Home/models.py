from django.db import models
#ekhadya page cha data hya database model madheh table format madhe store hoyil
# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=122)
    #type hya attribute mule kalta django la ki data kontya type cha ahe  to html made lihyacha asto
    email=models.EmailField(max_length=122)
    Phone=models.CharField(max_length=12)
    desc=models.TextField()
    date=models.DateField()
#ek model banaun zalavar tyala rejister karayala lagta aidmin.py madhe
    def __str__(self):
        return self.name
#hyachya mule contact made tayar zalela object cha nav person chya name ni cha save hota

