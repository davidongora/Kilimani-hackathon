# Generated by Django 5.0.6 on 2024-08-01 08:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("forum", "0002_poll_pollchoice"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="postcomment",
            name="user",
        ),
    ]
