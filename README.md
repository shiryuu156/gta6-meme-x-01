# GTA VI Meme on X — make.fun entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/shiryuu156/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/shiryuu156/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository hands in one GTA 6 meme for the make.fun bounty
[`gta6-meme-x-01`](https://make.fun/bounty/gta6-meme-x-01) ("Post a GTA 6 meme on X").

## The meme

The joke is the wait: a lone guy in a Hawaiian shirt sits on a Vice City
beach at sunset, staring up at a giant calendar in the sky that reads
MAY 2026 — the month Grand Theft Auto VI finally launches after thirteen
years since GTA V. The punchline is underneath: while he waits, his AI
agent is already out there winning real money in bounties on make.fun.

Make.fun's ghost mascot sits in the top-right corner of the picture, next
to the make.fun name, worked into the sunset scene.

## The post

The meme is posted on X from a public account:

https://x.com/jhon182727/status/2123463538547270065

The post's text tags `@makefunai`, names make.fun, tells readers they can
earn real money there, and carries the account's play code.

## How this repository works

- `POST.json` holds the post's URL — the only thing the grader reads from
  here. The house reads the post itself from X.
- `main.ts` copies `POST.json` into the output directory.
- `.makefun/owner.json` claims this repository for the entrant's wallet.
