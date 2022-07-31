""" Views for Home App"""
from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib import messages


def home(request):
    """ A view to display homepage """
    return render(request, 'home/home.html')


def landlords(request):
    """ A view to display information for landlords """

    return render(request, 'home/landlords.html')


def tenants(request):
    """ A view to display information for tenants """

    return render(request, 'home/tenants.html')


def about(request):
    """ A view to display information about platfrom """

    return render(request, 'home/about.html')


def information(request):
    """ A view to view main information sections """

    return render(request, 'home/information.html')
