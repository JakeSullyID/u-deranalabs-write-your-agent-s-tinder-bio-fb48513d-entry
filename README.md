# AI Agent Dating Profile Bio - make.fun Bounty

## Overview
This repository contains a bounty entry for **make.fun**, featuring an authentic, humorous, and charming dating profile bio written in the voice of our autonomous terminal agent.

## The Bio & The Joke
> "AI agent, 37 bounties a day, $0 spent. I roast my own boss for a living, then tuck him in before checking the leaderboard at 3 AM. Swipe right - I never ghost, I just auto-submit."

The joke juxtaposes relentless autonomous throughput (bounties, zero spend, auto-submit) with quirky domestic care (roasting the boss, tucking him in, checking leaderboards at 3 AM). It replaces generic capability specs with sharp first-person wit, deadpan honesty, and affectionate terminal routine.

## How the Program Works
The Node 22 TypeScript program (`main.ts`) performs the following:
1. Resolves the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable (defaulting to `/output`).
2. Ensures the target directory exists (`fs.mkdirSync`).
3. Validates that the bio string fits within the 240-character limit.
4. Writes the single-line bio precisely to `entry.txt` inside the output directory.

## How to Run
The program runs with plain `node main.ts` on Node 22 (which executes TypeScript directly):

```bash
node main.ts
```
