---
title: Circle of Fifths
date: 2025-01-13T07:30:00+1000
lastmod: 2025-01-13T07:30:00+1000
categories:
  - Music
---

My method for practicing bass guitar is based on the Circle of Fifths, inspired by a method taught by [Scott Devine](https://www.youtube.com/@devinebass).

The Circle of Fifths is a music theory concept which links each of the 12 notes in a sequence. Start with a note, and increment it by 5. Play that "fifth", and then increment another five. As a bit of code, it could be expressed like this:

```
notes = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"]
index = 0;

while playing {
    index = index + 5 // Move foward 5 notes in the sequence.
    index = index % count(notes) // Make sure our index is within range.
    play( notes[ index ] )
}
```

<!--more-->

In other words, count forward 5 notes, looping back to the start as needed. This would result in the following repeating sequence: C / F / B♭ / E♭ / A♭ / D♭ / G♭ / B / E / A / D / G.

Which results in a rather beautiful star dodecagram.

![The Circle of Fifths](/images/circle-of-fifths.svg)

### Step 1: Learn the progression

This progression is helpful to practice, because it's very common in many varieties of music. Additionally, bassists often enumerate a triad while playing, which includes the fifth note in the key. Practicing fifths help you find interesting harmonic structures. If the guitarist is playing a C, consider an F.

### Step 2: Practice major triad shapes

A triad is simply the first (or root) note, third note, and fifth note in a scale.

```
 ↓     ↓     ↓
 1  2  3  4  5  6  7
 C  D  E  F  G  A  B
```

There are essentially 3 patterns you could use to deconstruct a major triad on the bass guitar. Here's a C triad, in those three shapes (R for root note, 3 for the third, 5 for the fifth).

```
Shape 1:
G|---|---|---|---|---|---|---|
D|---|---|---|---|-5-|---|---|
A|---|---|-R-|---|---|---|-3-|
E|---|---|---|---|---|---|---|

Shape 2:
G|---|---|---|---|---|---|---|
D|---|-3-|---|---|-5-|---|---|
A|---|---|-R-|---|---|---|---|
E|---|---|---|---|---|---|---|

Shape 3:
G|---|---|---|---|---|---|---|---|
D|---|---|---|---|-5-|---|---|---|
A|---|---|---|---|---|---|-3-|---|
E|---|---|---|---|---|---|---|-R-|
```

I practice these by playing through the Circle of Fifths using shape 1 first, then shape 2, and finally shape 3.

One thing I do to help me know when I've "got it under my fingers" is to throw a drum track on (I use my electric piano for this). When I'm comfortable playing through each sequence with a 110 bpm, that's when I know to move on.

### Step 3: Practice inversions

When I first start practicing the major triads in their various shapes, I'll be playing the triad in order: R / 3 / 5. But as I'm feeling more confident with this, I'll invert the triad once (3 / 5 / R) or twice (5 / R / 3).

Keeping in the Circle of Fifths sequence, you get this:

- (C chord) E / G / C
- (F chord) A / C / F
- (B♭ chord) D / F / B♭
… and so on.

Of course each of these inversions can be played in each of the shapes listed above! So go through each inversion using each shape. Again, a drum track helps a lot!

### Step 4: Combining shapes

Okay with this next step I implement some limitations on myself in order to force brain and fingers into uncomfortable territory.

The task is: Play through the Circle of Fifths triads using only fret 1—5 (or fret 6 if necessary). No open notes.

Once I'm feeling comfortable here, I'll move the whole thing up the neck, playing frets 6—10, or 8—12. This usually takes some time to figure out – I'm still becoming familiar with the notes north of the fifth fret! But that's why it's good practice.

Limiting the frets in this way forces you to choose a different shaped triad for each note in the circle.

Repeat with each inversion. Or sometimes I just throw in a random inversion while I'm playing through.

### Step 5: Minor triads

Rinse and repeat steps 2—4, but using minor triads instead. Figure out your shapes, and proceed from there.

```
 ↓     ↓     ↓
 1  2  3  4  5  6  7
 C  D  E♭ F  G  A♭ B♭
```

You could even do the same for diminished or augmented chords, but I haven't bothered to learn these yet.

---

Many of these concepts have helped me on other instruments, too. Inversions on piano, and chord progressions on guitar. I'm not sure if bass is the best lens with which to approach a new instrument, but it's one that's worked for me so far.