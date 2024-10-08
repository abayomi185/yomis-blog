---
title: 'Tailscale on OpenWrt'
pubDate: 2022-04-23
author: 'Yomi Ikuru'
excerpt: It's LAN but its everywhere and anywhere! You're gonna love it.
image:
  src:
  alt:
tags: ['guide']
---

I've been needing to set up a point-to-site VPN (1 subnet) to replace my long standing wireguard setup. The setup that currently allows me to remotely access my infrastructure and services internally and publicly.

I attempted to set up the VPN entirely using wireguard and configuring OpenWrt to expose my local subnet to the wireguard network. This was so I could SSH into my Proxmox server remotely without needing to use its assigned wireguard IP address. Here's an example:

local-proxmox-IP: 10.1.0.5
wireguard-proxmox-IP: 10.15.15.5

SSH-ing locally: ssh [email protected]
SSH-ing remotely with wireguard: ssh [email protected]

SSH-ing remotely with tailscale: ssh [email protected]
I faced issues setting this up using just wireguard, failing to expose the subnet to the wireguard network. So, I ended up looking to Tailscale to solve this problem. Tailscale has been great and I love the effort they've put into making mesh VPN networks accessible. Tailnets, the peer-to-peer mesh networks are able to function without a central server unlike the pure wireguard setup. I do have a few gripes with Tailscale though which I'll get to later.

To get started with Tailscale on OpenWrt, the binary which contains two parts, tailscaled (the networking component) and tailscale (the authentication and interfacing component) needs to the installed. This can be done using opkg or downloaded and extracted directly from the tailscale package server

opkg update
opkg install tailscale
luci, the GUI for OpenWrt and opkg may also be used.

The tailscale binary on opkg may be outdated but it is set up as a service which is convenient. You may also create your own tailscale service using this guide.

In the shell of the OpenWrt device, run tailscale up to authenticate your device to your tailscale account, thereafter you should see your OpenWrt device on your Tailscale dashboard.

Run the command tailscale up --advertise-routes=<YOUR-LOCAL-SUBNET-HERE> to add the OpenWrt device as a subnet router in your VPN. You may need to go to your Tailscale dashboard to acknowledge the changes for the OpenWrt device; the free Tailscale account is limited to 1 subnet router.

Luci web interface showing tailscale device.
A new tailscale0 device will show up in the luci interface under Network>Interfaces>Devices. At this point, the OpenWrt device can be pinged from other devices in the tailscale network.

To allow access to the local subnet, an interface for the new tailscale0 device would need to be created. In my setup, the interface protocol is set to unmanaged and the interface is added to the same firewall zone of the subnet to expose (the 10.1.0.x subnet in my case), then follows a restart of the OpenWrt device and the setup is complete!

Tailscale interface - TS0.
My gripe with this setup is that I am relying on Tailscale to orchestrate the mesh network. This gives quite a bit of information to Tailscale which is detailed in their Privacy Policy in addition to the information given to OAuth providers (Google and Microsoft/GitHub) to authenticate Tailscale accounts. For this reason, I am looking to make the switch to Headscale, a self-hosted implementation for the Tailscale control server. Until then, I will happily enjoy the freedom the Tailnet gives me.
