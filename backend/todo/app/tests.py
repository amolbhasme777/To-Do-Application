from django.test import TestCase
from rest_framework.test import APIClient
from .models import Todo

class TodoAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.todo1 = Todo.objects.create(title="Test Todo 1", body="Test Body", completed=False)
        self.todo2 = Todo.objects.create(title="Test Todo 2", body="Another Body", completed=True)

    def test_get_todos(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

    def test_create_todo(self):
        data = {"title": "New Task", "body": "New Body", "completed": False}
        response = self.client.post('/api/todos/', data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Todo.objects.count(), 3)

    def test_update_todo(self):
        response = self.client.put(f'/api/todos/{self.todo1.id}/', {"title": "Updated Task", "body": "Updated Body", "completed": True}, format='json')
        self.assertEqual(response.status_code, 200)
        self.todo1.refresh_from_db()
        self.assertTrue(self.todo1.completed)

    def test_delete_todo(self):
        response = self.client.delete(f'/api/todos/{self.todo1.id}/')
        self.assertEqual(response.status_code, 204)
        self.assertEqual(Todo.objects.count(), 1)
