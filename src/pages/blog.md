---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: wpPosts
  size: 2
  alias: posts
permalink: 'blog/page-{{ pagination.pageNumber + 1 }}/index.html'
---

Paginating through the last 10 wordpress posts, 2 posts per page.
Pagination styling depends on browser support for `:has()`
