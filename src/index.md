---
layout: base.html
pagination:
  data: collections.post
  size: 10
  alias: posts
  reverse: true
---
# Welcome to My Weblog!

This is a mixture of a Today I Learned and a Linkblog. For longer blogposts, I
normally use the other [blog](https://snats.xyz/pages/articles.html).
<br>
<br>
Page {{ pagination.pageNumber | plus: 1 }} of {{ pagination.pages.length }}

{% for post in posts %}
  - {{post.date | date: "%Y-%m-%d"}} [{{ post.data.title }}]({{ post.url }})
{% endfor %}

{% if pagination.href.next %}
  <a href="{{ pagination.href.next }}">Older Posts</a>
{% endif %}
<br>
{% if pagination.href.previous %}
  <a href="{{ pagination.href.previous }}">Newer Posts</a>
{% endif %}
