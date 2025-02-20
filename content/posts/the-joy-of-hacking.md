---
title: The Joy of Hacking
date: 2025-02-20T10:30:00+1000
lastmod: 2025-02-20T10:30:00+1000
audio: https://archive.org/download/digging-for-fire/the-joy-of-hacking.mp3
audiolength: 1865664
audioduration: 00:03:39
categories:
  - Tech
---

Whenever I'm working on something new, my end goal is to distill it into the simplest version possible. Clean, readable, minimalist.

Usually, that process starts with chaos and complexity. Whether it's a coding project or a TTRPG concept, the genesis is the same. Throw together a whole mess of ideas, goals, questions, and inspiration. Then refine. Find parts that fit together nicely, trim the fat, leave no wasted space.

The same thing happens on the macro scale. Right now, the very nature of programming is undertaking a large, and very messy, change.

Clean, maintainable code? Overrated, according to current trends.

{{< quote author="Andrej Karpathy" link="https://x.com/karpathy/status/1886192184808149383" >}}
There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away.
{{</ quote >}}

_Vibe coding_ sounds like a lot of fun for experienced programmers. It also sounds like a terrible way to learn to code.

The problem is that we're trading _speed_ for _quality_. Let's face it, mostly because for the first time in history, _we can_. This might be a reasonable trade-off some of the time, but it's a mistake to default that way.

 {{< quote author="Salvatore Sanfilippo" title="We are destroying software" link="https://antirez.com/news/145" >}}
We are destroying software by no longer taking complexity into account when adding features or optimizing some dimension.

We are destroying software with complex build systems.

We are destroying software with an absurd chain of dependencies, making everything bloated and fragile.

We are destroying software telling new programmers: “Don’t reinvent the wheel!”. But, reinventing the wheel is how you learn how things work, and is the first step to make new, different wheels.

...

We are destroying software trying to produce code as fast as possible, not as well designed as possible.

We are destroying software, and what will be left will no longer give us the joy of hacking.
 {{</ quote >}}

Alright. We've got AI now. It does some amazing things, and some not so amazing things. It has transformed the way we code. We've also got package dependencies coming out our ears, and 1,001 Javascript frameworks, each one more trendy than the next. That's our starting point. That's our mess.

Now, let's refine. What can we get rid of? What works well together? What helps, without destroying _the joy of hacking_?