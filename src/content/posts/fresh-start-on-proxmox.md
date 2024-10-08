---
title: 'Proxmox - A Fresh Start'
pubDate: 2022-02-12
author: 'Yomi Ikuru'
excerpt: So why Proxmox? Proxmox is a Hypervisor first and foremost and has a lovely web interface to orchestrate a majority of things that would take more steps to do using a terminal. Proxmox also runs Linux, Debian GNU/Linux to be exact.
image:
  src:
  alt:
tags: ['tag1', 'tag2', 'tag3']
---

Please see my previous blog post for context.

I did it, I finally did it! I learned a lot from using Linux with Linux Mint and I thought I'd take it a step further. An unfamiliar territory that gave me chills but I ventured into it and scoured the proxmox web interface until I stumbled across a chevron above an underscore. Is this what I think it is, a terminal!? [Cue dramatic music]. I then swiftly realised that its not as unfamiliar as I thought.

Always has been Linux - source: r/linuxmemes by u/parkerlreed
So why Proxmox? Proxmox is a Hypervisor first and foremost and has a lovely web interface to orchestrate a majority of things that would take more steps to do using a terminal. Proxmox also runs Linux, Debian GNU/Linux to be exact.

Proxmox web interface
To briefly tell you what has changed from my previous build;

Case: Metalfish S3 Plus -> Cooler Master NR200 (larger sff case)
CPU: i5 10400 -> i9 10900T (QTB0 Engineering sample)
GPU: Radeon 5500XT -> Nvidia RTX 3060 Ti (Luckily got it at MSRP)
Storage Additions: 2TB 2.5" WD Blue SATA SSD + 1TB Kingston A2000 NVMe Boot SSD + Repurposed 3.5" 2TB Seagate BarraCuda HDD
Fans: Many 120mm fans (Mostly by Arctic)
Antennae: Cute and small antennae

New build image gallery
Technical Details
Proxmox does things a bit differently to virt-manager. They both use QEMU/KVM but Proxmox has its own config file and commands which is not dissimilar to libvirt that runs underneath virt-manager. Proxmox also has an extensive built-in support in the web-UI for managing LXC, LVM, ZFS and recently in PVE 7, Btrfs.

Proxmox also makes creating, modifying and assigning networks to guests within the hypervisor very straightforward.

To be continued...
