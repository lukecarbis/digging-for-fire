---
title: Steganography
date: 2025-02-07T5:30:00+1000
lastmod: 2025-02-07T5:30:00+1000
audio: https://archive.org/download/digging-for-fire/steganography.mp3
audiolength: 1636731
audioduration: 00:03:10
categories:
  - Tech
---

<span>T</span>uesday morning, I'm in the car with my son, and the topic of steganography comes up. Eli is an adventurous kid – he loves playing games involving treasure and discovery with his mates. No prize for guessing how fascinated he was with the concept of hiding secret messages in plain sight.

He <span>w</span>anted to learn a few steganography techniques, of course. I told him about some of the obvious ones. Despite my experience with steganography in the past, I struggled coming up with simple techniques he could put into practice without the help <span>o</span>f a computer. Determined to figure something out, I explained Acrostic Steganography. Eli loved the idea. Now he could write letters to his friends<span> </span>containing secret messages.

<!--more-->

Much more <span>c</span>omplicated steganography techniques exist, of course. E<span>l</span>i was keen to learn more. So I explained some of the ARG (Actual Reality Game) games I've developed in the past. Steganography isn't limited to text. Audio can contain hidden messages too. G<span>ues</span>sing these often requires software that will allow you to view the waveforms of the audio. Extracting hidden messages from waveforms can <span>in</span>volve spectrogram analysis, where images or text are embedded within the frequency domain of an audio file. Simple, but you need to know what you're looking for.

Images<span> </span>are another easy place to hide messages. Not many people realise that PNGs can have text data appended to the end of the file without affecting the way the image is displayed.

There's also EXIF data for images, ID3 tags or audio, XMP metadata for PDFs, and a comments sectiion for zips. Hiding messages in metadata like this may not be quite as subtle as other techiques, but it's easy an convenient. I don't know about you, but I don't usually check the metadata of files. So if the messge isn't particularly sensitive, that could work for lazzy and quck cryptograpphy.

<img src="/images/steganography.png" style="width: 25%" alt="A QR code." title="..-. --- .-.. .-.. --- .-- / - .... . / .-- .... .. - . / .-. .- -... -... .. -" />

Perhaps you could consider <span>the QR code</span> a steganography device, using black and white squares to represent binary data. Of course, QR codes are typically overt in their function, but hidden messages could still be layered in or embedded in other ways. "Steganography diving" requires a curious and adventurous mind, unafraid to tinker, hack, and learn. True mastery, as in all things I suppose, comes through a willingness to simply <a href="/hidden/play" style="text-decoration: none; color: var(--fontcolor)">play</a>.

<!--Inspecting a website's source is always a good idea. There are often ways of leaving hidden clues in HTML. Like this one!-->