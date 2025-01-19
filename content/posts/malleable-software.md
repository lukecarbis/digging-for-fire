---
title: Malleable Software
date: 2025-01-17T10:30:00+1000
lastmod: 2025-01-17T10:30:00+1000
audio: https://archive.org/download/digging-for-fire/malleable-software.mp3
categories:
  - AI
---

Ben Thompson's [aggregation theory](https://stratechery.com/aggregation-theory/) posits that the internet created an entirely new disruptive business paradigm, because for the first time in history, products could be distributed with zero marginal cost.

Now, large language models have triggered a second wave of disruption: while the internet eliminated distribution costs, AI is eliminating creation costs – making software essentially free at every stage.

Internet = zero *marginal* cost
Internet + LLMs = zero *total* cost[^1]

<!--more-->

[Geoffrey Litt](https://www.geoffreylitt.com), via [X](https://x.com/geoffreylitt/status/1879561947299115433):

> Today's software ecosystem evolved around a central assumption that code is expensive, so it makes sense to centrally develop and then distribute at low marginal cost.
>
> If code becomes 100x cheaper, the choices no longer make sense! Build-buy tradeoffs often flip.

LLMs are making software development quick, easy, and accessible to everyone. So the big question is: How will this disruption change the way we use our computers?

One likely answer is that we'll see a decline in bundled software, in favour of scripting tools and API services. Rather than subscribing to an accounting SaaS, which might meet _most_ of my needs (with a bunch of other features I'll never use) I can just build my own accounting software, specific to my particular use-cases.

Since I own the source code, and an LLM can be given full context into how the software is written and what my business needs are, features can be added as needed.[^2]

A personal anecdote:

Yesterday I was wondering how I might be able to host a podcast for free. I had a few requirements, very niche.

- Convert my M4A files to MP3
	- Attach my show artwork, show name, and episode title
	- Use 64kbps mono
- Upload the converted file to a free hosting service (the [Internet Archive](https://archive.org/))
- Copy the public URL of the service to my clipboard

I could have simply chosen to host with Buzzsprout or [choose your favourite podcast hosting platform] and paid a monthly subscription. But in about 4 hours, I was able to get a much more personalised solution up and running. Not only is it free, it's a simple AppleScript droplet that I can pop my recorded audio into, and have a URL returned in about a minute. *Just what I was looking for*.

If I didn't know that Claude was capable of the heavy lifting, I'd have never bothered with the project. I'm a capable senior software engineer, but this sort of project would just have taken too long and required too much mental effort.

The shift from bundled software to personalised solutions isn't just about cost or efficiency. It represents a fundamental change in our relationship with technology. When software becomes malleable, shaped by our exact needs rather than vice versa, we move from being passive consumers to active shapers of our digital environment. We create software that can bend to fit us, rather than us bending to fit it.

[^1]: When we say "zero cost", we're rounding down. Of course distribution online does have a cost to it – hosting isn't _usually_ free. And building software with AI still does take some time. The point is that the costs have been so far reduced as to be _essentially_ zero, comparatively.

[^2]: AI isn't perfect, and maybe it won't ever be. We might see small development teams added to small businesses to develop all their in-house software, with everything built precisely to requirements by AI, and guided by human engineers.