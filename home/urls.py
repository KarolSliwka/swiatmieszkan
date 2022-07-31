""" Home App URL Configuration
The `urlpatterns` list routes URLs to views.
"""
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('informacje/wynajmujacy', views.landlords, name='landlords'),
    path('informacje/najemca', views.tenants, name='tenants'),
    path('informacje/o-platformie', views.about, name='about'),
    path('informacje', views.information, name='information'),
]
