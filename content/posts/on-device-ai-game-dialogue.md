---
title: On-Device AI Game Dialogue
date: 2025-07-03T12:00:00+1000
lastmod: 2025-07-03T12:00:00+1000
categories:
  - AI
  - Tech
---

Just a few quick thoughts on my first real experimentation with on-device Apple Intelligence.

My project started out as a game where you are imprisoned, and you need to convince the jail guard to free you! The guard's dialogue would be AI generated on the fly, as well as set of possible responses for the player to select from.

I felt that giving the player options to respond with, instead of freeform text, would make it more interesting and easier to play. I was right! It's way more fun. My guess is that it has something to do with cognitive overhead. You don't want to _think_ too hard while playing a game.

In terms of Apple Intelligence, type specification is a killer feature. I don't think I'll ever be able to programatically communicate with an AI's API without it. I could do things like this:

```
@Generable
struct Reply: Hashable, Equatable {
	@Guide(description: "A short description of the disposition with which the reply is given.")
	let mood: Mood

	@Guide(description: "The spoken reply.")
	let dialog: String

	@Guide(description: "The person replying.")
	var speaker: Speaker
}
```

And the response would be in exactly that format. Note that Mood and Speaker are enums with a predefined set of possible values.

In terms of speed, it was a little slower than I had hoped. But then, I was only running it in the simulator, so I can't be sure. Also I'm doing a lot of work, and I'm sure some of it can be optimised, or even pre-loaded. The time it takes it about on par with a network request to ChatGPT though.

I frequently hit a "sensitive content" error. `SensitiveContentSettings: Sanitizer model found unsafe content in value`. The error doesn't really give me a lot to go on, and in the end I figured that it must be related to the player being in prison or something. So I changed it to a generic fantasy setting, and prompted the dialogue to be in "ye olde English". 

And that gave me another sporadic error response. `Unsupported language pl detected.` (sometimes other languages). If I removed the silly old English, this resolved itself.

![A screen capture of an AI game dialog on iOS.](/images/on-device-ai.gif)

The "game" part didn't really work because the AI wasn't able to drive the conversation to a natural conclusion. If I wanted to spend more time on it, I'd have multiple different prompts, or prompt variations. The prompt would change depending on mood, and conversation length, to help find a natural ending. One prompt for whatever success looks like: receiving the quest or learning the information. If the NPC becomes angry, or the conversation has lasted too long, a prompt for wrapping the conversation up saying goodbye.

If you'd like to see the project code, let me know, I'm happy to share.