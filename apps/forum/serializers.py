from rest_framework import serializers
from apps.forum.models import Post, PostComment, Poll, PollChoice

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = "__all__"


class PollSerializer(serializers.ModelSerializer):
    choices = serializers.SerializerMethodField()
    votes = serializers.SerializerMethodField()
    completion = serializers.SerializerMethodField()

    class Meta:
        model = Poll
        fields = "__all__"

    def get_choices(self, obj):
        return obj.choices.values("choice_text", "votes")
    
    def get_votes(self, obj):
        votes = sum(obj.choices.values_list("votes", flat=True))
        return votes
    
    def get_completion(self, obj):
        votes = sum(obj.choices.values_list("votes", flat=True))
        total = int(obj.required_votes) - int(votes)
        return total/100 if int(votes) > 0 else 0


class PollChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PollChoice
        fields = "__all__"


class PollVoteSerializer(serializers.Serializer):
    choice = serializers.IntegerField()