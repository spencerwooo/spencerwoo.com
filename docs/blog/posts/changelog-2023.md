---
title: Spencer's Changelog for 2022 🥫
date:
  created: 2023-01-08
  updated: 2023-01-08
categories:
  - life
draft: false
summary: What's new, deprecations and tips in 2022.
slug: changelog-2023
---

It has been a while since my last update. And to be fair, 2022 was a very boring and event-less year for me. Strict
lockdowns and quarantines in mainland China made it impossible to do anything and be anywhere. I spent maybe 6 to 8
month of the 12 months in 2022 basically stuck at home. So, yeah, **what a f\*cked up year**.

<!-- more -->

## What's Changed

- `feat(🏴󠁧󠁢󠁳󠁣󠁴󠁿):` I have officially graduated from my MSc at UofG with distinction in April.
- `feat(🇨🇳):` I applied for a PhD program back in BIT and was accepted. So, I officially started as a PhD student in
  BIT in September this year. My field of research stays the same (AI security).
- `fix:` I spent _only_ the whole of March, part of April, and the whole of November in Beijing. I hope 2023 won't be
  f\*cked up like this and I can _actually_ be on campus in-person.

## Deprecations

- `deprecated:` Maintaining this blog with Notion as CMS has been quite a hassle. I ran into Vercel usage issues and
  rate limits throughout last year. **In the end, I removed the Notion integration completely and migrated the portfolio
  site altogether.**
- `fix(🚯):` The articles I published previously was for-a-while down, as I had initially planned to ditch writing blogs
  altogether. I left a Notion public site link on the new portfolio-only site that linked back to the database I used
  for creating my articles (deprecated now).

## What's New

- `feat(📝):` Well, blogs are back. I finally settled on this Next.js and Tailwind CSS template. I exported part of
  the articles from the old Notion database and migrated it to this new site, which is what you are reading now.
- `feat(👨‍💻):` A few new open-source projects that I created this year:
  - [PaimonMenuBar](https://github.com/spencerwooo/PaimonMenuBar) - Track real-time Genshin Impact stats in your macOS
    menubar (written in Swift UI).
  - [clashrup](https://github.com/spencerwooo/clashrup) - Simple CLI to manage your systemd `clash.service` and config
    subscriptions on Linux (written in Rust).

Additionally, there are a few projects that I have been working on for my research which I cannot disclose or
open-source.

## Tips

- Unless [Contentlayer](https://www.contentlayer.dev/) starts supporting Notion as a CMS, I will not be considering
  using Notion as a CMS for my blog anymore. I will be sticking to Markdown and Git.
- Maintaining open-source projects is tiresome. As for previous projects including
  [onedrive-vercel-index](https://github.com/spencerwooo/onedrive-vercel-index) and
  [substats](https://github.com/spencerwooo/substats), I have decided to provide their code as-is for now, and will not
  be actively answering issues or providing support for them.

That's all for this year. Thanks for reading.
