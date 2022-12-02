---
title: Posts from Wordpress
description: Wordpress posts
layout: blog
permalink: '/posts/page-{{ pagination.pageNumber }}/index.html'
pagination:
  data: posts
  size: 4
---

Shows the las 10 wordpress posts with pagination, 4 articles on each page. Edit in `_layouts/blog.njk`
The pagination styles depend on browser-support for `:has()`.
