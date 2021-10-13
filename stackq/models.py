from django.db import models


# stack overflow query
class Stackqs(models.Model):
    query = models.TextField(max_length=255, null=True, blank=True)
    accepted = models.BooleanField(null=True, blank=True)
    answers = models.SmallIntegerField(null=True, blank=True)
    body = models.TextField(max_length=255, null=True, blank=True)
    closed = models.BooleanField(null=True, blank=True)
    migrated = models.BooleanField(null=True, blank=True)
    notice = models.BooleanField(null=True, blank=True)
    nottagged = models.TextField(max_length=255, null=True, blank=True)
    tagged = models.TextField(max_length=255, null=True, blank=True)
    title = models.TextField(max_length=255, null=True, blank=True)
    userId = models.SmallIntegerField(null=True, blank=True)
    url = models.URLField(max_length=255, null=True, blank=True)
    views = models.SmallIntegerField(null=True, blank=True)
    wiki = models.BooleanField(null=True, blank=True)
    sort = models.TextField(max_length=16, default='activity')
    order = models.TextField(max_length=16, default='desc')

    def get_query(self):
        query_str = "sort=" + self.sort + "&order=" + self.order
        if self.query is not None: query_str += "&query=" + self.query
        if self.accepted is not None: query_str += "&accepted=" + str(self.accepted)
        if self.answers is not None: query_str += "&accepted=" + str(self.answers)
        if self.body is not None: query_str += "&body=" + self.body
        if self.closed is not None: query_str += "&closed=" + str(self.closed)
        if self.migrated is not None: query_str += "&migrated=" + str(self.migrated)
        if self.nottagged is not None: query_str += "&nottagged=" + str(self.nottagged)
        if self.tagged is not None: query_str += "&tagged=" + self.tagged
        if self.userId is not None: query_str += "&userId=" + str(self.userId)
        if self.views is not None: query_str += "&views=" + str(self.views)
        if self.url is not None: query_str += "&url=" + self.url
        if self.wiki is not None: query_str += "&wiki=" + str(self.wiki)
        return query_str


# stack overflow question
class Stackql(models.Model):
    tags = models.TextField(max_length=255)
    owner = models.TextField(max_length=255)
    is_answered = models.BooleanField(null=True, blank=True)
    view_count = models.SmallIntegerField(null=True, blank=True)
    answer_count = models.SmallIntegerField(null=True, blank=True)
    score = models.SmallIntegerField(null=True, blank=True)
    last_activity_date = models.IntegerField(null=True, blank=True)
    creation_date = models.IntegerField(null=True, blank=True)
    last_edit_date = models.IntegerField(null=True, blank=True)
    question_id = models.SmallIntegerField(null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    question_query = models.ForeignKey(Stackqs, on_delete=models.CASCADE)
