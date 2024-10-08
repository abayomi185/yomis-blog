---
title: 'Blog Update'
pubDate: 2021-08-15
author: 'Yomi Ikuru'
excerpt: This blog has recently been updated to use Ghost, a headless CMS and the experience so far has be great. It has boosted my motivation to write new posts and has improved my productivity.
image:
  src:
  alt:
tags: ['tag1', 'tag2', 'tag3']
---

This blog has recently been updated to use Ghost, a headless CMS. The main advantage of Ghost over Jekyll which was previously used, is the ability to create posts and make changes using a pretty UI in the browser. My previous implementation using Jekyll required that I cloned a repo, make changes and push it to github which then runs a github action that builds a static site hosted on GitHub Pages. The old site and comments can be found at https://abayomi185.github.io/yomis-blog.

Ghost in my experience so far has great SEO and speedy performance with high rankings in Google Search and Chrome Lighthouse. The main drawback to using Ghost is the requirement of a server that runs Ghost core and in this case also serves the website.

My Ghost instance as of writing this is run on a Hetzner CX11 Virtual Private Server (VPS) using Docker with an SQLite database.
