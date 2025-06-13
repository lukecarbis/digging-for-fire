---
title: The Eurocrats, iOS interoperability, and PebbleOS
date: 2025-03-21T16:00:00+1000
lastmod: 2025-03-21T16:00:00+1000
audio: https://archive.org/download/digging-for-fire/the-eurocrats-ios-interoperability-and-pebbleos.mp3
audiolength: 4361887
audioduration: 00:08:51
categories:
  - Tech
---

Pebble is back![^1] [I wrote about it](/posts/pebble), [Eric Migicovsky wrote about it](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches), even [John Gruber wrote about it](https://daringfireball.net/linked/2025/03/19/repebble-watches), and it's now [available for pre-order](https://store.repebble.com).

But…

iPhone users like myself have been warned. [The experience will be hamstrung](https://ericmigi.com/blog/apple-restricts-pebble-from-being-awesome-with-iphones), due to Apple's lack of interoperability between iOS and third-party devices.

{{< quote author="Eric Migicovsky" title="Apple restricts Pebble from being awesome with iPhones" link="https://ericmigi.com/blog/apple-restricts-pebble-from-being-awesome-with-iphones" >}}
Some features will appear first on our Android app, and then eventually we’ll add them to the iOS app. This is because the majority of our development team uses Android phones, and generally we’re building things for ourselves, so naturally Android comes first.

I don’t want to see any tweets or blog posts or complaints or whatever later on about this. I’m publishing this now so you can make an informed decision about whether to buy a new watch or not. If you’re worried about this, the easiest solution is to **buy an Android phone**.
{{< /quote >}}

This is such a non-starter. I'd happily switch from an Apple Watch to a PebbleOS watch. But there's no way in hell you'll convince me to switch from iOS to Android.

Essentially, this announcement sucked all the joy out of spending $225 on a new watch. I was pretty close to clicking that "Apple Pay" button for a Core Time 2, but I can't bring myself to be excited about a second-rate experience.

It's weird though. Many of the experiences that Eric lists as impossible on iPhone are unimportant to me.

> - There’s no way for a smartwatch to send text messages or iMessages.
> - You can’t reply to notifications or take ‘actions’ like marking something as done.
> - It’s very difficult to enable other iOS apps to work with Pebble.

I don't care about these features. I'm happy for my watch to live on my wrist and just give me notifications. I can pull out my phone to action them if needed. And I don't need complex integrations with other apps (and I'm sure reasonable workaround exist for this anyway). Part of my problem with Apple Watch is that it tries to do too much! Keep it simple: Time, Notifications, Health, and Calendar.

Then, Eric lists another set of problems.

> - You can’t easily side load apps onto an iPhone. That means we have to publish the app on the iPhone appstore.
> - Getting a Javascript engine to run in PebbleOS forced us to go through many hoops due to iOS.
> - You can’t reply to notifications or take ‘actions’ like marking something as done.

Sorry Eric, these are features not bugs. I wouldn't _want_ to sideload the Rebble app (or whatever app that launches for PebbleOS), I would much rather get it from the official App Store. Apple's Javascript restrictions are for performance and privacy and security reasons, I don't want you working around those. And I don't want anyone having wholesale access to all my notifications. That leads to a privacy nightmare. Don't tell me you should at least make it an option – if PebbleOS gains the ability to read notifications, everyone will, and if everyone does then we'll see Big Social dark pattern their way into everyone's private life.

Then, Eric mentions another problem, which definitely gave me pause. Here we have something Apple should being paying a little closer attention to.

> - If you (accidentally) close our iOS app, then your watch can’t talk to app or internet.

There should be an API for enabling third-party devices to speak with iOS. You don't need to give away any privacy measures for this. Just direct device to device communication, with an on-device data enclave which the app can then access as needed. In fact, it should be possible to pair a PebbleOS watch to your iPhone _without_ the app installed. Enforce a limited content scope, enforce a limited update interval, enforce everything you learned about preserving battery life from making the Apple Watch. But at least make it possible for PebbleOS to sync Time, Calendar, Health, and also speak to the internet. It might be nice to have access to alarms, too (but even Apple Watch can't manage that one!).

Apple _should_ have done this long ago, but because they didn't they're now being subjected to egregiously overreaching regulation.

{{< quote author="European Commission" title="Commission provides guidance under Digital Markets Act to facilitate development of innovative products on Apple's platforms" link="https://ec.europa.eu/commission/presscorner/detail/en/ip_25_816" >}}
Today, the European Commission adopted two decisions under the Digital Markets Act (DMA) specifying the measures that Apple has to take to comply with certain aspects of its interoperability obligation…

The first set of measures concerns nine iOS connectivity features, predominantly used for connected devices such as smartwatches, headphones or TVs…
{{< /quote >}}

To be clear, these regulations go against everything I believe about government’s role in regulating private enterprise. It’s draconian. It's heavy-handed. It's more like a geopolitical swing at America’s tech dominance than thoughtful policy. And also, Apple has been asking for it. The lesson is: If you can't self-regulate, you'll get kicked in the ass by Europe.

That said, the measures, while unnecessarily punitive in most regards, do include some of the requests I mentioned earlier: direct to device pairing, and peer-to-peer Wi-Fi. If Apple was willing, they could have done a _much_ better job at device to iOS integration, working with manufacturers like Garmin or Bose who already have products in the space. But they didn't, and now the Eurocrats are telling Apple how to make software.

John Gruber also commented on Eric's announcement post.

{{< quote author="Daring Fireball" title="Two New PebbleOS Watches" link="https://daringfireball.net/linked/2025/03/19/repebble-watches" >}}
My advice would have been to return with just one watch. Make a decision: color or monochrome. I’d sort of lean toward black-and-white, to differentiate it from Apple Watch and other high-end smartwatches. They’re never going to out-color Apple on display quality, so why not go the other way and lean in on black-and-white utility and contrast?
{{< /quote >}}

Na. The colour e-ink is awesome. I'm not after a bright, saturated, colour display. Just a little interest and style to my watchfaces. Also, PebbleOS leans heavily into pastels, which will work great on this display.

{{< quote author="Daring Fireball" title="Two New PebbleOS Watches" link="https://daringfireball.net/linked/2025/03/19/repebble-watches" >}}
Instead of arguing that “Apple restricts Pebble from being awesome with iPhones”, lean into the ways that Pebble can be awesome because it isn’t an Apple Watch. 30-day battery life is awesome. I don’t think Apple Watch will ever offer that. Being able to run whatever apps – including watch faces – that you want on your own Pebble watch is awesome, and I know Apple Watch will never offer that. Lean into what Pebble watches can do that Apple Watches can’t. If the experience as a Pebble owner can be a lot better paired with an Android phone than an iPhone, lean into that. Show how much better it is on Android than iOS. Compete.
{{< /quote >}}

Complaining about Apple's lack of interoperability definitely paused my Pebble purchase. I don't know for sure, but I suspect it would be quite difficult to demonstrate the better experience on Android. Maybe replying to notifications, but like I said earlier, I'm more than happy to forgo this on my watch (in fact, I kind of wish that the colour version didn't have a touch screen – the button only interface is so damn charming).

What this whole thing has taught me is that there's a fundamental cultural gap separating iOS and Android users. Maybe Eric thinks that we're upset about being in some sort of unescapable prison of an ecosystem, but we're here happy and safe in our walled garden.

[^1]: Technically, it's not Pebble that is back, but PebbleOS. This will run on two new watches, neither of which include the word "Pebble" in the product name. The software has been open-sourced, but the Pebble trademark clearly still belongs to Google.