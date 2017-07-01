from django.contrib import admin
from .models import Activity

class ActivityAdmin(admin.ModelAdmin):
    list_display = ('user', 'verb', 'target', 'created',)
    list_filter = ('created',)
    search_fields = ('verb',)

admin.site.register(Activity, ActivityAdmin)
