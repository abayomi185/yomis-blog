---
layout: post
title: PiServer Gallery
date: 2020-07-14 09:33
summary: A Collection of images & videos from the PiServer Project
categories: projects
permalink: /piserver-gallery
image: /_img/homepage/piserver.jpg
twitter_card: https://yomis.blog/_img/piserver/twitter_card.jpg
---

This is a collection of photos and videos of the activities & processes from design to finish from the [PiServer project]({% post_url 2020-07-08-PiServer %}).

{:refdef: style="text-align: center;"}
<div id="tab">
    <button class="tab-button tab-active" id="left-tab"><h2 class="link-tab link-tab-left">Photos</h2></button>
    <button class="tab-button tab-inactive" id="right-tab"><h2 class="link-tab link-tab-right">Videos</h2></button>
</div>
{: refdef}
<br>

{:refdef: style="text-align: center;"}
<div class="left-tab-content">
    <div>
        {% for title_head in site.data.piserver-gallery.piserver_image_gallery_all %}
            {% if title_head.header%}
                <a href="#{{title_head.header}}" style="margin: 10px;"><h4 style="display: inline;">{{title_head.header}}</h4></a>
            {% endif %}
        {% endfor %}
    </div>
    {% include_relative _post-includes/piserver-gallery-images.html %}
</div>
{: refdef}
<br>
{:refdef: style="text-align: center;"}
<div class="right-tab-content">
    {% include_relative _post-includes/piserver-gallery-videos.html %}
</div>
{: refdef}
{:refdef: style="text-align: center;"}
[Go To Top](#tab)
<br><br>
{: refdef}