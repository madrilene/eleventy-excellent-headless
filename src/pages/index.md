---
permalink: /index.html
title: ' Eleventy Excellent headless'
description: 'An Eleventy starter with a headless WordPress workflow.'
layout: 'home'
pagination:
  data: posts
  size: 100
blog:
  title: 'Blog'
  intro: "I'm showing the last 4 posts from a Wordpress site!"
---

## An Eleventy (headless WP) starter

This [Eleventy](https://www.11ty.dev/) starter is the same as the [native Eleventy starter](https://github.com/madrilene/eleventy-excellent), but it gets its blog posts from a WordPress site. For now, static sites are handled via markdown in Eleventy, the blog posts are fetched. I created a seperate repository because this project may develop in a different direction from now on.

Edit your WordPress url in `src/_data/posts.js`.
