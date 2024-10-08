---
title: 'Proxmox - Resizing a LXC Disk'
pubDate: 2021-11-12
author: 'Yomi Ikuru'
excerpt: The Proxmox Web-UI is great but it doesn't allow for reducing the size of a LXC disk that you may have overdone. Here's how to do it.
image:
  src:
  alt:
tags: ['tag1', 'tag2', 'tag3']
---

The Proxmox Web-UI is great but it doesn't allow for reducing the size of a VM disk or Container disk that you may have overdone. Here's how to do it.

You will need access to your Proxmox node via SSH or directly.

This applies to the standard proxmox setup using LVM.

On your proxmox node, do the following:

List containers

pct list
Stop the container you want to resize

pct stop 420
Find out it's path on the node

lvdisplay | grep "LV Path\|LV Size"
Run a file system check

e2fsck -fy /dev/pve/vm-420-disk-0
Resize the file system

resize2fs /dev/pve/vm-420-disk-0 10G
Resize the local volume

lvreduce -L 10G /dev/pve/vm-420-disk-0
Edit the container's conf file

nano /etc/pve/lxc/420.conf
Update the following line accordingly

FROM:

rootfs: local-lvm:vm-420-disk-0,size=20G

TO:

rootfs: local-lvm:vm-420-disk-0,size=10G
Start the container

pct start 420
Enter and check the resize container disk

pct enter 420
df -h
Source: Proxmox Forum [Online] Available: https://forum.proxmox.com/threads/resize-lxc-disk-on-proxmox.68901/
