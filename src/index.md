---
layout: base.html
---

# Welcome to My Weblog!

This is a mixture of a Today I Learned and linkblog.

{% for post in collections.post reversed %}
  - {{post.data.date | date: "%Y-%m-%d"}} [{{ post.data.title }}]({{ post.url }})
{% endfor %}
