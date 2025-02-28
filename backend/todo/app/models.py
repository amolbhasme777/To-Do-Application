from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title  # Ensure it only returns a string without extra queries
