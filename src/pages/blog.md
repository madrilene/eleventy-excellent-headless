---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: wpPosts
  size: 4
  alias: posts
permalink: 'blog/page-{{ pagination.pageNumber + 1 }}/index.html'
---

Paginating through the last 10 wordpress posts. Pagination styling depends on browser support for `:has()`
