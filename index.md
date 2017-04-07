---
layout: default
---

<div class="posts">
  {% for post in site.posts %}
  { capture this_year
	<article class="post">

	<span class="date">{{ post.date | date: "%b %-d %Y" }}</span><br>
	<span class="postlink"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></span>

	  <div class="entry">
		{{ post.excerpt }}
	  </div>

	  <a href="{{ site.baseurl }}{{ post.url }}" class="continue">read more…</a>
	</article>
  {% endfor %}
</div>
