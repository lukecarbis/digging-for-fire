---
title: "🥙 Pita: Devlog 2"
date: 2025-01-31T13:00:00+1000
lastmod: 2025-01-31T13:00:00+1000
audio: https://archive.org/download/digging-for-fire/pita-devlog-2.mp3
audiolength: 3777788
audioduration: 00:07:38
categories:
  - Apps
---

I'm building an app called Pita. It makes publishing and managing your podcasts easy (and pretty). This is the second update. The first is [here](/posts/pita-devlog-1).

One of the problems with hosting your own podcast is that you still need the audio files to be served from somewhere. Depending on the podcast, these files can be quite large, especially after you're [50 or more](https://async.fm) episodes in. You also need to host your RSS file somewhere (though this can be somewhere different). And most of the time, you'll want a simple marketing website too – maybe one that has your podcast episodes listed with an audio player.

That's a lot – and that's why all these paid SaaS options exist (Buzzsprout, Blubrry, Podbean, Libsyn, the list goes on…)[^1]. But what if you could do it all for free?

<!--more-->

Well you can! There's a bit of setup involved, but here's how I've got things setup for the [Digging for Fire Podcast](/podcast).

1. **Audio hosting:** the [Internet Archive](https://archive.org/) offers free mp3 hosting!
2. **Website hosting:** you can host a static website for free
    - Use [Jekyll](https://jekyllrb.com) or [Hugo](https://gohugo.io) to create your blog, with each podcast episode as a post
    - Static hosting like [GitHub Pages](https://pages.github.com) or [Cloudflare Pages](https://pages.cloudflare.com) to build and serve the website
3. **Podcast RSS hosting:** You can modify Jekyll or Hugo to serve an RSS file for your podcast episodes

---

The goal for Pita is to automate this whole process. Connect your Internet Archive account and your Cloudflare account, and Pita will look after the rest.

In the meantime, I've hacked together some scripts.

Each new podcast episode goes through a four step process:

### 1. AI cleanup and edit

I've been using [Auphonic](https://auphonic.com) for this. It does a great job of getting rid of background noise and reverb. This is essential for me because I record in a dome in the rainforest, so I get lots of both!

### 2. Prepare the MP3

Whether I use Quicktime or Voice Memos to record, the output is always a plain MP4. I've been using ffmpeg to create a 64k mono mp3, and embed the episode artwork, title, and podcast name.

### 3. Upload to Internet Archive

There's a great command line utility called IA which does the heavy lifting for me here. It uploads the episode to archive.org, and returns a URL. I copy this URL into the front-matter of my Hugo post.

### 4. Get additional file data

The podcast XML standard also has an option for filesize and duration, to help podcast players show the episode correctly without needing to download it. This last script gives me the data I need, and I also copy that into my front-matter for the episode post.

Then, in Hugo, my front-matter (a bit of meta data text at the top of each markdown post) looks like this:

```
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
```

Thanks to great RSS support in Hugo, I was able to add [a separate RSS feed](https://github.com/lukecarbis/digging-for-fire/blob/main/layouts/_default/home.podcast.xml) to my blog which only includes new posts that have the audio included in the front-matter.

And that's it! A completely free podcast.

---

So my next step is going to be pulling all that into a very basic Mac app. It should move an audio file through a workflow of:

1. Collect episode info from user
2. AI Edit
3. MP3 Packaging
4. Upload MP3 to IA
5. Create a GitHub PR to a Jekyll / Hugo repo with the new episode

This will still require manually setting up the site to begin with, and auto-deploying it via GitHub / Cloudflare Pages. 

My plan is to test this whole thing on a new podcast network that Joshua, Jonathan, and I are working on: Pretty Good. My goal is to get it to a point where trusted friends can run the app on their machine and have it publish episodes for them.


[^1]: The plan for Pita is to integrate with as many of these services as possible (depending on their level of API support). But I'd also really like to offer users an option that doesn't require any monthly subscription.