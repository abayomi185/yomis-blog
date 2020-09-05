---
layout: post
title: PiServer HDD Power Woes
date: 2020-09-05 12:30
summary: Data corruption, power loss and modifications!
categories: projects
permalink: /piserver-usbmod
image: /_img/homepage/usbmod.jpg
twitter_card: https://yomis.blog/_img/piserver/twitter_card.jpg
---

A couple months down the line with [PiServer](/piserver), I noticed an issue that I’ve been lazy to fix until now.
Ever so often, the hard drive (HDD) in PiServer would cut out when I happen to SSH in or access an application on PiServer over the network. It has caused a few minor issues such as corrupting a few files and halting certain processes until the HDD is able to spin back up.

I’ve now been able to rectify this issue by using a 5V powered USB 3.0 hub (an inexpensive noname hub from eBay). It’s not an elegant solution but it gets the job done. The HDD will now receive its power directly from the power supply as opposed to sharing power with the Pi’s processor, of which I had to remove its core frequency overclock.
<br>
{% include_relative _post-includes/piserver-usbmod.html %}
<br>

This mod allows for storage expansion/redundancy with another HDD in future. The throughput of USB 3.0, well now called USB 3.1 Gen 1 is 5Gbps (gigabits) theoretically. Don’t get me started on the changes of the other USB 3 spec names, they seem unnecessary. The 5Gbps theoretical speed translates to about 300MB/s applicable which would be more than good enough for two spinning HDDs (The single HDD tops out at around 120MB/s). This is assuming the total bandwidth to the USB chip via PCIe is not constrained on the Raspberry Pi 4 which shouldn’t be the case.