---
title: Writer Deck
date: 2026-06-09T03:00:00+1000
lastmod: 2026-06-09T03:00:00+1000
categories:
  - Tech
---

I'm writing this blog post using a [JOMAA F01 folding keyboard](https://www.aliexpress.com/item/1005010559295647.html) with an [Xteink X3](https://www.xteink.com/products/xteink-x3). It's a brilliant, cheap, no fuss writer deck.

{{< figure src="/images/writer-deck-1.webp" alt="A simple, cheap, no fuss writer deck." caption="A simple, cheap, no fuss writer deck." >}}

A few notes on each component:

The JOMAA keyboard was such a great find. The design is a little out there, but I love it. You can get it in black, if the Y2K aesthetic bothers you. The most important part is that it's BTLE (AKA BLE) – the only kind of bluetooth that the X3 or X4 will pair with.

It's also a folding keyboard, so it packs away into a neat little package when you're done. This means that some of the keys take a little getting used to. The Y key, for example, is much smaller than the others. It took me about two days of typing before I was used to it, but now I don't even notice. The hinge works really nicely, and when layed flat, the product feels well made. When folded, the hinge tolerances feel a little loose.

{{< figure src="/images/writer-deck-2.webp" alt="My writer deck, folded away." caption="My writer deck, folded away." >}}

The best feature is that the back plate is ferromagnetic. That means that X3 magnetically snaps to it when folded, keeping the whole setup in one tidy little package.

On the X3. It doesn't include any typing software out of the box. Nor could I find any custom firmware online that supports my writer deck use case. There is a [firmware package for the X4](https://typeslate.com/tools/microslate/), but [I reached out to the author](https://www.reddit.com/r/typeslate/comments/1tydorh/x3_support/) and they have no plans to port to the X3. So, I built the writing firmware myself.

Well, I vibe coded it, which isn't quite the same thing. I'm not willing to share the project for that reason – it would be irresponsible to release code that I don't understand. But if I can vibe code up a solution in about 3 hours, I'm sure you can too. The hardest part was the bluetooth connection to the keyboard.

The X3 display is eink, so the update interval doesn't quite keep up with my typing speed. It's not that I lose any letters, only that refreshes slowly as I type, in blocks of around 6 letters at a time, as the display catches up with what I'm typing. Your milage may vary, depending on your typing speed. That might seem like a downer, but in reality, I'm not often looking at the screen while I type, it's more there for me to look at if I think I've made a typo, or I need to read back a little way. It's not perfect, but it's fine.

Overall, I'm really happy with how things turned out. I'm considering it a finished project for now (albeit with a short feature list for my firmware project which I'll likely never get around to).
