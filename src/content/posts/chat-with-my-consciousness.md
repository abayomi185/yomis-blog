---
title: 'Chat with my Consciousness'
pubDate: 2023-04-30
author: 'Yomi Ikuru'
excerpt: Ever wondered what it's like to chat with an artificially intelligent consciousness? I too wonder because this is really just ChatGPT in a disguise. Not bad but also not...
image:
  src:
  alt:
tags: ['tag1', 'tag2', 'tag3']
---

Chat with my Consciousness
Chat with my consciousness button on yomitosh.dev
Check it out at yomitosh.dev

The release of OpenAI's ChatGPT API was exciting and I was quick to sign up for access. I had used ChatGPT on the web that most are familiar with, but it was getting cumbersome having to sign in and verify that I am not in fact a robot.

My solution was to quickly put together a chat implementation that was fast and I could use freely. The metric I have just created whilst writing this is TTC (time to chat) and TTRFLR (time to receive first LLM response).

I emphasize 'quickly' because the first iteration of my chat feature would not do anything fancy or really be of much use. It sends a message and the user gets a response back for a single message sent, with no context of previous messages sent.

Whilst exploring the API docs, I discovered that ChatGPT can be primed to have some prior information for every chat. I soon imagined a sci-fi world where the knowledge held in a human brain can be offloaded onto an AI system to effectively make an AI clone. Thus Chat with my consciousness was born.

Chat with my consciousness interface showing the LLM responding as AGI Yomi.
I have had a swell time using my AI consciousness, it doesn't quite know everything I know and it seems to keep saying "As a large language model trained by OpenAI...". Otherwise, it has been helpful with everything that ChatGPT is typically helpful with, from bouncing around ideas, solving coding problems, rephrasing messages and more.

Not long after the initial version, I made improvements to the general useability and I also let everyone on my socials know that they can chat with my artificially intelligent consciousness...repeatedly. It seems someone somewhere took advantage of that and my bill is now more than $50 in the month of April, yay!🥹

OpenAI dashboard showing API usage in April 2023
I do not track users using this feature because this was intended to be quick but I do track where users are visiting from, on the site and I have seen locations that I am unfamiliar with. What I do know is that I get alerts regularly that my set limits for the OpenAI API have been reached and each time I hit the limit, I increase it as I'm growing dependent on this tech🥲.

So I hope this teaches me a lesson and I hope you got something out of this too.

Chat with my consciousness at yomitosh.dev with a shorter TTC than chat.openai.com

Some technical details:
yomitosh.dev has been active for a while using Nextjs and JavaScript. I refactored the codebase to use Typescript whilst working on this project and I'm relying on Vercel's Edge Functions to stream data from OpenAI's API and to hide my secret key. Check out the code at Yomi's Link-Hub

Updates:
Added GPT-4 toggle to use GPT-4
Added Chat history buttons to view and continue previous chats

Updates to the chat interface showing buttons to go back and forth between different threads
