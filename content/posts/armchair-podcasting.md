---
title: Armchair Podcasting
date: 2025-07-31T08:30:00+1000
lastmod: 2025-07-31T08:30:00+1000
categories:
  - Podcasts
---

A great podcast depends on the natural rapport of the hosts.

Social chemistry comes from mutual trust, respect, friendship, and experience. It also comes from your environment.

More often than not, [my podcasts](https://prettygood.fm) are recorded over video chat, or even [asynchronously](https://diggingforfire.blog/posts/turn-based-podcasting/). But Pirate School has a different kind of magic.

Talia and I record it on the couch. There's something about sitting on a lounge, arms spread, feet curled up, cushions, that makes for a much more conversational tone. It's fun, it's very easy (when would we ever find time to sit together in a podcasting studio?), and we're close at hand if the baby wakes up while we're recording.

I wanted to share our tech setup, because it works so well for this in-person, on-site kind of format.

## Mics

We use a pair of [DJI Mic 2s](https://www.dji.com/mic-2). They come in a great charging case, which includes the two mics, and a receiver which makes the whole setup wireless (except for the monitor – more on that in a minute). No tricky bluetooth connections or dropouts. The receiver is USB-C, so it plugs right into my Mac – OR – my iPhone. I can record the whole thing in Voice Memos.

The receiver has a setting which allows us to record each speaker on a separate audio channel. My voice goes on the left, Talia's on right. Ultimately, we will mix this down to mono, but having separate tracks helps a lot with the noise cancellation we do in post (more on that in a minute, too).

## Getting a Handle on Things

The DJI Mic 2s are lavalier mics, but we found that the audio quality was much better if you speak directly into them, rather than have them on our shirtfronts. For a few episodes we just held the mics in our fingers, but they're a bit too small for that, and it gets a bit awkward.

These [Handheld Wireless Microphone Sticks](https://www.aliexpress.com/item/1005008106596290.html) from AliExpress were a game changer. The Mic 2s clip neatly onto the end of what's essentially just a plastic stick handle, and you pop the windshield foam on top. Tada! You've got a traditional interview mic. It feels a lot more natural to speak into these.

## Monitor

It's super important to be able to hear yourself while you're recording. It's one of those "this one simple trick" things that actually does work to significantly improve the quality of your podcasting – so long as there's no latency. Thankfully, the DJI Mic 2's receiver has a direct headphone-out audio monitor (with very minimal latency) that passes both microphones straight through to a pair of headphones.

But there's two of us! We need to plug two sets of headphones in! So, we use a 3.5mm audio splitter similar to [this one](https://www.aliexpress.com/item/1005007989124617.html) (you can find these cheap just about anywhere). Plug the male end into the receiver, and now we can both plug our own headphones into the splitter.

This has the added benefit of combining both audio channels into a single mono channel. If I plug my headphones directly into the receiver, I hear myself in one ear and Talia in the other. But with a cheap audio splitter, we both hear both microphones in both ears.

## Headphones

We don't need anything hi-fidelity when it comes to recording voices for podcasts. The requirements for podcasting headphones are simple:

1. The must be wired.
2. They must have little-to-no audio bleed (sounds played through the headphones that "leak" into the microphones).
3. They must be comfortable.

I've found the [Behringer DH100 Drummer Headphones](https://www.behringer.com/product.html?modelCode=0403-AAP) to be perfect for this. Drummers headphones are designed to block out the loud noises coming from a drum kit while you're playing, so they have very little audio bleed. They're comfortable for wearing for longer recording sessions. Plus, they're really cheap. We have a pair of these, which we use for monitoring our audio.

## Post Processing

The DJI Mic 2s do a great job on their own, but I also run the resulting Voice Memos file through [Auphonic](http://auphonic.com). I've created a preset in Auphonic that adds our artwork to each episode, adds an intro and outro to each episode, removes background noise, normalises volumes, and removes long silences.

---
It looks something like this:
```
        📱
     📟─╯
🎧──━┻━──🎧
👨‍💼       👩‍💼
🎤       🎤
```
---

The whole setup costs about AU $580 (US $380). It can be packed up into a pretty small case. It's perfect for recording two people on the couch, at events, street interviews, or just out and about.

It should be possible to double the setup to get four people, but you'll need to use a Mac to record, with multiple USB-C ports. You could either record over multiple channels in GarageBand or Logic, or use the built in Audio MIDI Setup app to create an Aggregate Device which combines the two separate Receiver inputs.
