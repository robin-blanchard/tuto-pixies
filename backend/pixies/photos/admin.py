from django.contrib import admin
from pixies.photos.models import Photo


class PhotoAdmin(admin.ModelAdmin):
    model = Photo

    list_display = ("caption",
                    "details",
                    "created_at",
                    "updated_at",
                    "url")


admin.site.register(Photo, PhotoAdmin)
