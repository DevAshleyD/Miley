from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def homepage(request):
    template = loader.get_template('homepage.html')
    context = {
        'params': 'some params'
    }
    return HttpResponse(template.render(context))
