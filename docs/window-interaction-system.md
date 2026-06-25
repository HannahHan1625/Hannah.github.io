# Window Interaction System

## Purpose

This document records the design research and interaction ideas for the "window" concept in the Hannah personal site.

The goal is not to collect pretty window images randomly. The goal is to build a clear interaction system:

```text
window type -> opening behavior -> motion idea -> website content
```

## Design Position

The "window" is a metaphor for perspective.

It should communicate:

- curiosity
- humility
- openness
- awareness of personal limits
- willingness to connect across different viewpoints

## Product Terms

- `Interaction model`: how users interact with the site.
- `Motion language`: the rules for animation and movement.
- `Affordance`: visual hints that show users something can be clicked, opened, dragged, or explored.
- `IA / Information Architecture`: how content is grouped and navigated.
- `Prototype`: a testable rough version before final implementation.

## Window Design Table

| Priority | Window Type | Region / Reference | Visual Traits | Open Behavior | Motion Idea | Website Content | Notes |
|---|---|---|---|---|---|---|---|
| P1 | French casement window | France / Europe | double panels, vertical symmetry, elegant frame | two panels open outward | left and right panels rotate away | About | Good for introducing personal story |
| P1 | Japanese shoji | Japan | translucent paper, wooden grid, soft light | horizontal sliding | panel slides aside with light reveal | Learning notes | Good for quiet learning process |
| P1 | Chinese lattice window | China | geometric pattern, layered view, decorative frame | reveal through patterned mask | pattern fades or expands into content | Manifesto / Philosophy | Strong match for perspective metaphor |
| P2 | Mediterranean shutters | Southern Europe | colorful shutters, sunlight, exterior texture | shutters swing open | light spills into content area | Projects | Good for lively project reveal |
| P2 | Industrial sash window | Modern / industrial | vertical rails, metal frame, practical feel | vertical lift | content rises as frame lifts | Product demos | Good for functional product work |
| P3 | Islamic mashrabiya | Middle East / North Africa | dense geometric screen, filtered light | gradual visual reveal | grid opacity changes, content appears behind pattern | Research notes | Beautiful, but needs careful cultural handling |

## Research Notes

Use this section to paste links, observations, and image references.

### Reference 1

- Window type:
- Country / region:
- Source link:
- Why it is interesting:
- Possible interaction:
- Which site section it could fit:

### Reference 2

- Window type:
- Country / region:
- Source link:
- Why it is interesting:
- Possible interaction:
- Which site section it could fit:

## Image Reference Index

Put images in:

```text
docs/references/windows/
```

Then reference them like this:

```markdown
![Japanese shoji](references/windows/japanese-shoji.jpg)
```

## First Prototype Candidates

### Prototype A: About as French Casement Window

Hypothesis:

Opening two panels outward feels like introducing a person and inviting the visitor in.

Test:

- Can users understand it is clickable?
- Does the motion feel elegant rather than gimmicky?
- Does it work on mobile?

### Prototype B: Learning as Shoji Sliding Window

Hypothesis:

A soft horizontal reveal matches learning, reflection, and gradual understanding.

Test:

- Is the motion calm enough?
- Does the text remain readable?
- Does it support bilingual content?

### Prototype C: Manifesto as Chinese Lattice Reveal

Hypothesis:

Patterned reveal strongly supports the idea of perspective and partial view.

Test:

- Does it feel respectful and personal?
- Does the pattern distract from reading?
- Can it be implemented simply in CSS?

## Decisions

### 2026-06-26

- Start with one window only: a Chinese garden sliding window.
- Use six vertical wooden panels.
- Keep the view mostly front-facing with a slight perspective feeling.
- The panels should not feel fully solid; the cutout areas should reveal garden plants outside.
- The outside view should feel fresh, comfortable, and minimal, using watercolor-like banana leaves or fruit-tree foliage.
- Build this first as an isolated prototype before integrating it into the homepage.

### 2026-06-20

- Keep the window concept as an interaction and motion system, not just a visual card layout.
- Research comes before implementation.
- Do not redesign the homepage again until at least three window references are collected and mapped to content.

## Next Actions

- Collect 6-10 window references.
- Save images into `docs/references/windows/`.
- Fill in the Window Design Table.
- Pick one prototype to test first.
