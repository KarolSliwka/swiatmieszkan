""" Views for Home App"""
from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib import messages


def home(request):

    context = {
    }

    return render(request, 'home/home.html', context)


@staff_member_required
def remove_lessons_cards_management(request, card_id):

    return redirect(reverse('home'))
