---
title: 'NixOS - A brief review'
pubDate: 2024-05-18
author: 'Yomi Ikuru'
excerpt: The best linux distro I have ever used
image:
  src:
  alt:
tags: ['project']
---

So, I recently picked up a Thinkpad X1 Carbon Gen 6 and I decided to try out NixOS. And this is a short one on my experience using NixOS.

NixOS is amazing and likely the best linux distro I've ever used. And here are the pros and cons:

The pros:

- Declarative builds - define what you want and rebuild, its that simple
- Nix the programming language - a readable functional programming language
- Nixpkgs packages - a large repo with more packages than the Arch AUR
- Nix generations - roll back to a previous system version. Never will a system update break things
- Nix shell - very useful for quickly checking or testing a package or app
- Nix flakes - a powerful way to compose a system, multiple systems or a dev environment
- A growing nix community and appreciation for nix

The cons:

- Non-FHS compatible - nix stores things in different places which often means you can't download any binary or app and expect it to work
- Increased storage space - the roll back feature means previous package versions are kept on the system
- Cryptic error messages - rebuilding your system is not always so straightforward when errors can not be found
- Complexities of declarative abstractions - some modules can only be fully understood by looking at how it is built in the nixpkgs or home-manager repo
- Inadequate documentation - there is a new wiki but generally the documentation is lacking or geared towards an experienced linux user. The Arch wiki is still the GOAT

NixOS with the Hyprland desktop has been a joy to use and I have gained a lot of knowledge along the way. I also made my first contribution to the home-manager repo. I'll link a bunch of resources that helped me get started as well as a link to my blogpost.

So what will you do? Will give NixOS a spin and perhaps ditch Arch?

Let me know and let me know if you use Nix.
