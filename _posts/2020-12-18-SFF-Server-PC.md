---
layout: post
title: SFF Server PC
date: 2020-12-18 13:00
summary: New and improved Server Build
categories: projects
permalink: /server-pc
image: /_img/homepage/server-pc.jpg
twitter_card: https://yomis.blog/_img/serverpc/network-diagram-close.jpg
---

{:refdef: style="text-align: center;"}
![](/_img/serverpc/serverpc.jpg){:class="medium-post-img"}
{: refdef}

Having tested the waters with PiServer (Raspberry pi 4 powered NAS/Server), I thought I could use a step up, to experiment with ‘bigger toys’ similar to those used in a professional setting; an **x86 platform**.

>One of the main aims for this project was to successfully run Windows 10 in a virtual machine using KVM(Kernel-based Virtual Machine) to run games as well as improve my knowledge on virtualisation. This PC is a linux based machine that I would go on to use for; cryptocurrency mining, linux kernel compilation, more containerised applications, a reverse proxy server and more.

## Hardware

Staying true to the **small form factor (SFF)** of PiServer, I looked to accomplish something very similar with this new build. The [r/sffpc](https://www.reddit.com/r/sffpc) subreddit was a great source as well as [Optimum Tech](https://www.youtube.com/channel/UCRYOj4DmyxhBVrdvbsUwmAA) on YouTube detailing the things to look out for when purchasing and building a small form factor PC. 

* * *
{:refdef: style="text-align: center;"}
Here’s a spreadsheet created by Redditor [u/prayogahs](https://www.reddit.com/r/sffpc/comments/e878ha/sff_case_list/) that helped a lot; [spreadsheet](https://docs.google.com/spreadsheets/d/1AddRvGWJ_f4B6UC7_IftDiVudVc8CJ8sxLUqlxVsCz4/edit#gid=1885868234)
{: refdef}
* * *

I opted for the [Metalfish S3 plus](https://www.aliexpress.com/item/10000218146300.html) and the rest of the specs are as follows;

- Intel i5-10400 6 Cores / 12 Threads CPU
- Alpenfohn Black Ridge CPU Cooler
- 32GB 2666MHz Corsair Vengeance LPX DDR4 RAM
- Radeon 5500XT GPU
- ASUS ROG H470-I Gaming Motherboard
- Corsair SF450 PSU 80+ Gold
- 240GB M.2 SATA SSD
- 500GB 2.5” SATA SSD
- 2TB 2.5” HDD

<!-- Slide show if images here -->
<br/>
{:refdef: style="text-align: center;"}
<p align="center">
<iframe width="560" height="350" src="https://www.youtube.com/embed/e5DTeG9-QMM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 85%;">
</iframe>
</p>
{: refdef}


## Software
I opted to use [Linux Mint](https://linuxmint.com) as my base OS after a lot of research and indecisiveness. My reasons were; it is based on Ubuntu which is very popular and documentation is plentiful and it runs Cinnamon DE (Desktop Environment) which I find mostly pleasing perhaps due to its similarities with Windows (I have yet to try out a Window Tiling Manager). I tested a number of other distros (Linux Distributions) including Arch with KDE Plasma DE which I ultimately decided against as I wanted the server PC to be as stable as a rock.

Fast forward onto the super interesting and time consuming part of this setup after tweaking fan curves for whisper silence, upgrading from 16GB to 32GB RAM and setting up Samba and docker as it was on PiServer. It was time to set up Windows and macOS in a virtual machine using KVM.

* * *
{:refdef: style="text-align: center;"}
Kernel-based Virtual Machine (KVM) - [wiki](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine)
{: refdef}
* * *

I discovered KVM, a Type 1 [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor) by watching, [SomeOrdinaryGamers](https://www.youtube.com/user/SomeOrdinaryGamers) on YouTube and I was so intrigued by the capabilities and security benefits from running a virtual machine. KVM is special because as it says in its name, it virtualises at the kernel level which does wonders for performance in VMs and best of all, GPU’s and other peripherals can be **“passed”** to the VM effectively making the VM have full control of PCIe devices and other devices as it would if it were running bare metal (not under a VM).

#### Windows VM
Installing Windows 10 was easy enough using multiple guides and the very detailed [Arch documentation](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF). As a disclaimer, Arch uses a slightly different configuration process to most ubuntu based distros, so your search may need to be specific. This guide by Mathias Hueber made setting it up on Linux Mint simple, [PCI Passthrough Guide](https://mathiashueber.com/pci-passthrough-ubuntu-2004-virtual-machine/).

#### macOS VM
Installing macOS is different to say the least and compatibility is inconsistent across different hardware, although less of an issue for a basic setup in a virtual machine. I followed the guide by Kholia, [OSX-KVM](https://github.com/kholia/OSX-KVM) which uses OpenCore as opposed to Clover, with the general consensus being OpenCore has a better future.

A tip, if you’re having issues with OpenCore GPU Passthrough, I mounted the OpenCore-Passthrough qcow2 image and added ‘agdpmod=pikera’ to boot-args in the OpenCore config.plist, to get GPU Passthrough to work with my Radeon Card (Nvidia graphics cards are not supported in macOS past High Sierra).


## Conclusion
I didn’t go into the nuances I stumbled on with this setup as they kept me up for many nights and I would prefer not to but if you come across any issues, I would love to help out, granted I’m no expert. The [r/VFIO](https://www.reddit.com/r/VFIO/) subreddit and discord have loads of helpful information too. And if you didn’t already know, reading error logs help a ton.

I do want to mention that going with a Radeon GPU prior the new generation GPUs (Big Navi), you will most likely face the radeon "PCIe Reset Bug", which now has a [fix](https://github.com/gnif?tab=repositories) from Geoffrey McRae with Reddit username [gnif2](https://www.reddit.com/user/gnif2) that doesn’t require recompiling the linux kernel anymore (I had fun compiling the linux kernel though).

* * *
{:refdef: style="text-align: center;"}
I’ve gone ahead to do a lot more with this build that I’ll document at a later date, cryptocurrency mining with hiveOS being one of them. I have learned a lot from doing all of this, I urge you to give it a go if you are considering building a similar setup.
{: refdef}
* * *

{:refdef: style="text-align: center;"}
![](/_img/serverpc/network-diagram.png){:class="xlarge-post-img"}
{: refdef}