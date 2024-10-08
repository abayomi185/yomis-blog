---
title: 'Setting up SSH on your Unix-like OS'
pubDate: 2021-12-09
author: 'Yomi Ikuru'
excerpt: Secure Shell or SSH is a network protocol for communcating securely over a network. It is available on most Unix-like systems (Linux, BSD, macOS, etc) as well as Microsoft Windows.
image:
  src:
  alt:
tags: ['guide']
---

Secure Shell or SSH is a network protocol for communicating securely over a network. It is available on most Unix-like systems (Linux, BSD, macOS, etc) as well as Microsoft Windows.

The most typical use of SSH is to log into shell on a remote host but it can also be using for file-transfer and forwarding X from a remote host.

Check this out for the difference between Terminal, Console, Shell, and the Command Line; askubuntu

Remote
The first thing to do is install Open-SSH Server on the remote computer.

Debian/Ubuntu:

sudo apt install openssh-server
macOS:

Pre-installed on macOS.

Arch Linux/Manjaro:

sudo pacman -S openssh
sudo systemctl enable sshd
sudo systemctl start sshd
Fedora:

sudo dnf install -y openssh-server
sudo systemctl enable sshd
sudo systemctl start sshd
OpenSUSE:

sudo zypper install openssh
sudo systemctl enable sshd
sudo systemctl start sshd
Client
You will also need to install Open-SSH on the client computer. The computer you intend to use to connect to the remote computer/server.

Debian/Ubuntu:

sudo apt install openssh-client
macOS:

Pre-installed on macOS.

Arch Linux/Manjaro:

sudo pacman -S openssh
Fedora:

sudo dnf install -y openssh-clients
OpenSUSE:

sudo zypper install openssh
Generating SSH Keys
After installation, SSH keys would need to be generated on the server and client if they do not exist. To check if SSH keys exist, change directory to /home/<User>/.ssh/ or on macOS /Users/<User>/.ssh where <User> is your computer account username; e.g. /Users/yomi/.ssh. In this directory the files, id_rsa and id_rsa.pub would exist if keys have been generated for the computer.

To change directory:

cd /home/<User>/.ssh/
If the .ssh folder does not exist or the id\_\* files do not exist, then the SSH keys can be generated using the command:

ssh-keygen
This command will show a prompt with a few questions. These can be sped through by pressing the enter/return key for all questions.

This will need to be done on both Server and Client computers/servers.

Eureka! SSH has now been installed and configured.

Connecting to a Remote Client
To connect to a remote client, the IP address of the remote client is required. This can also be retrieved using a DNS name.

The name of the user to remote into would also need to be known.

For example, to remote into a server as a user abc with an IP address of 10.1.2.3, the following command is used:

ssh abc@10.1.2.3
The password to the user abc would need to be entered to authorise the connection and log in.

To get rid of the unsafe password input, ssh keys are used to verify the identity of incoming connections.

SSH keys can be copied to the server using the command:

ssh-copy-id abc@10.1.2.3
This action will create a file in the .ssh directory names of the client computer named known_hosts. The know_hosts file will contain the IP address 10.1.2.3 and the public SSH key of the remote computer.

And that's it
SSH is now fully configured between a Client and Remote computer.

SSH icon by Icons8
