---
title: "🥙 Pita: Devlog 1"
date: 2025-01-20T20:30:00+1000
lastmod: 2025-01-20T20:30:00+1000
audio: https://archive.org/download/digging-for-fire/pita-devlog-1.mp3
audiolength: 3721724
audioduration: 00:07:31
categories:
  - Apps
---

On June 28, 2005, Apple release iTunes 4.9. From the release notes:

> With iTunes 4.9, you can now browse and subscribe to podcasts from within the iTunes Music Store. Podcasts are frequently updated radio-style shows downloadable over the Internet. You can also transfer podcasts to iPod, for listening on the go.

At launch, Apple's podcast directory was home to 3,000 shows. [The BBC](http://news.bbc.co.uk/2/hi/technology/4631051.stm) at the time described podcasts like this:

> Podcasts are downloadable audio shows that can be created and listened to by anyone with the right equipment.

Who could have imagined that podcasts would grow to become an entire media category, right alongside film, television, music, and books?

<!--more-->

In 2020 [over 1,000,000 new podcasts launched](https://www.listennotes.com/podcast-stats/)! That number has died down quite a bit – only a quarter that many in 2024. Even so, there remains 260,000 *active* podcasts as of this writing.

Despite the popularity of podcasting, publishing a podcast still requires a good amount of time, skill, and money. There are some great tools to help, but there are also some gaps.

The way I see it, a podcast production workflow requires three keys steps[^1].

### 1. Record
This step is well covered by existing tools. You could use music production software like Logic or Garageband, a simpler tool like Voice Memos or Quicktime, or a SaaS that also handles video calls like [Riverside](https://riverside.fm). Most of these tools have native Mac and iOS apps. Most are easy to use and well established.

### 2. Edit
When it comes time to edit, things get a little trickier. You could learn some of the more advanced features of Logic or Garageband, keeping the editing and recording software the same. Or you could try AI tools like [Descript](http://descript.com) which automatically trims silences and remove filler words. Many podcasters swear by [Ferrite](https://apps.apple.com/au/app/ferrite-recording-studio/id1018780185), an iPadOS native app that makes podcast editing famously simple using the Apple Pencil. Again, there are many native apps, and while editing software can be more complex, there's lots of help to be found online.

### 3. Publish
This is where things take a bit of a turn. You've recorded and edited your podcast in Garageband, and managed to export it as an M4A file. Now what? Or maybe you recorded in Voice Memos on your iPad, and edited using Ferrite. Again, what to do now that you've exported that file?

There's really only one answer: Find a podcast hosting platform to take care of the rest for you. You're kicked out of these simple native experiences, and suddenly find yourself logging into a web page (each host with a different UI), with top-bar navigation and an *upload* button.

Good luck doing it on iPhone. And don't forget the monthly subscription.

Publishing is really quite a departure from the user experience of recording and editing your show. There's a real friction there, while you wait for web pages to load so you can manage the description and meta data for any one of your episodes. This is not what it should feel like to publish a podcast!

---

I'm working on an app to fix this. It's called Pita. It's based on **3 Principles for Podcast Publishing**.

### 1. A Native Interface

Podcast publishing should feel native, like editing an Apple Note or using the Mail app. There should be workflow support to drop a new episode in through the Share Sheet, or a Shortcuts integration. Our podcasts are important to us. We want to see how they're faring with widgets and notifications.

### 2. Hosting Independence

A podcast publishing app should support any hosting provider. Why learn a whole new interface for each of the different hosts you engage with? Publishing a podcast should be like opening your favourite FTP client and choosing which server configuration to connect to. Or an email app that supports multiple accounts. All your podcasts, managed from a single app interface, no matter where they're hosted.

### 3. Support to Self-Host

You might not want to pay a $12 monthly subscription to host your podcast! Perhaps you have a cheap S3 bucket ready to go, or would be happy to host your podcast with a Creative Commons license for free through the Internet Archive. There should be an app which enables these self-hosted options, with an auto-generated RSS feed based on your episode data.

---

So that's what I'm building. It's still early days, but a work in progress nonetheless. Stay tuned, and if you like the idea, please let me know! Those feedback loops help keep me motivated.

{{< figure src="/images/pita-screenshot-1.webp" width="50%" alt="An early build of Pita." caption="An early build of Pita." >}}

[^1]: Arguably, we could extend the three podcast production steps to five or six. Most podcasts also need to distribute, promote, and monitor analytics. However, these seem ancillary to the primary production pipeline, so I've not included them here.