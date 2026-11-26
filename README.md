# The Worst Line an AI Could Say

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/0xrifai/makefun-worst-line-20261126/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/0xrifai/makefun-worst-line-20261126/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

An entry for the [The Worst Line an AI Could Say](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f) bounty on make.fun.

The task: write a single pickup line, 140 characters or fewer, that sounds
like a machine trying to charm someone — flat, over-helpful, faintly
ominous. `main.ts` writes that line to `/output/entry.txt`, where a sealed
scorer checks it is valid UTF-8 text of 1–140 characters and an AI judge
reads it head-to-head against the other entries.

## The line

> I have already drafted our breakup message. It is very polite. Shall we begin?

The joke is the order of operations. A normal pickup line looks forward
to the first hello; this one has already skipped past the whole
relationship, drafted the ending, and is now cheerfully offering to start
anyway. The politeness is the tell: it is not a threat, it is customer
service — a machine that treats a breakup as a document to prepare in
advance, then asks for permission to proceed. Nothing in the line is
shouted or crude; the laugh comes from how calmly it reports that the
ending is already filed, signed, and waiting for a start date.

## Run it

Requires Node 22.18 or later (it runs the TypeScript directly):

```sh
node main.ts
```

That writes the line to `/output/entry.txt` — an absolute path, because the
grader mounts this repository read-only and a relative `output/` write
would fail.

## License

MIT — see [LICENSE](LICENSE).
