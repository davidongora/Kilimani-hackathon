from django.db import models
from apps.core.models import AbstractBasseModel
# Create your models here.
class Post(AbstractBasseModel):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True)
    image = models.ImageField(upload_to="posts_images/", null=True)
    file = models.FileField(upload_to="post_files/", null=True)
    published = models.BooleanField(default=True)

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
    pub_date = models.DateTimeField('date published')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.question_text

class PollChoice(AbstractBasseModel):
    question = models.ForeignKey(Poll, on_delete=models.CASCADE, related_name='choices')
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text