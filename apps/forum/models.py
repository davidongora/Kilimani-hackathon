from django.db import models
from apps.core.models import AbstractBasseModel
# Create your models here.
class Post(AbstractBasseModel):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True)
    image = models.ImageField(upload_to="posts_images/", null=True)
    file = models.FileField(upload_to="post_files/", null=True)
    published = models.BooleanField(default=True)
    meeting_link = models.URLField(null=True)

    def __str__(self):
        return self.title
    
class PostComment(AbstractBasseModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="postcomments")
    #user = models.ForeignKey("users.User", on_delete=models.SET_NULL, null=True)
    content = models.TextField(null=True)
    file = models.FileField(upload_to="comment_files/", null=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True, blank=True, related_name="commentreplies")
    image = models.ImageField(upload_to="commentimages", null=True)

    def __str__(self):
        return self.post.title
    

class Poll(AbstractBasseModel):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)
    required_votes = models.IntegerField(default=200)

    def __str__(self):
        return self.question_text
    

class PollChoice(AbstractBasseModel):
    question = models.ForeignKey(Poll, on_delete=models.CASCADE, related_name='choices')
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
    
class Survey(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Question(models.Model):
    survey = models.ForeignKey(Survey, related_name='questions', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    QUESTION_TYPES = [
        ('text', 'Text'),
        ('multiple_choice', 'Multiple Choice'),
    ]
    question_type = models.CharField(max_length=50, choices=QUESTION_TYPES)

    def __str__(self):
        return self.text

class Choice(models.Model):
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)

    def __str__(self):
        return self.text

class Response(models.Model):
    survey = models.ForeignKey(Survey, related_name='responses', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Answer(models.Model):
    response = models.ForeignKey(Response, related_name='answers', on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text_answer = models.TextField(null=True, blank=True)
    choice_answer = models.ForeignKey(Choice, null=True, blank=True, on_delete=models.CASCADE)