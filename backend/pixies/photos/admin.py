import arrow
from django.contrib import admin
from pixies.photos.models import Photo


class PhotoAdmin(admin.ModelAdmin):
    model = Photo

    def created(self, obj):
        return arrow.get(obj.created_at).humanize()

    def updated(self, obj):
        return arrow.get(obj.updated_at).humanize()

    list_display = ("caption",
                    "details",
                    "created",
                    "updated",
                    "url")


admin.site.register(Photo, PhotoAdmin)
