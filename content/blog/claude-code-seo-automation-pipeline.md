---
title: "Claude Code SEO automation: How I built a one-person SEO agency with n8n, Claude Code, and the Shopify API"
date: "2026-04-29"
excerpt: "Walkthrough of a real Claude Code, n8n, and Shopify Admin API content pipeline that lifted a Shopify ecommerce client's organic clicks 18% in five weeks"
author: "Enlightened Insights Team"
tags: ["seo", "ai-automation", "claude-code", "n8n", "shopify"]
---

![Laptop on a desk with a code editor on screen and a coffee mug beside it](/blog/hero-laptop.jpg)

<em>Photo by <a href="https://www.pexels.com/@dkomov" target="_blank" rel="noopener">Daniil Komov</a> on <a href="https://www.pexels.com/photo/modern-workspace-with-coding-laptop-and-coffee-34803979/" target="_blank" rel="noopener">Pexels</a>.</em>

This paragraph was written by an actual human. It's a Wednesday. I'm eating reheated chili for lunch and hoping it doesn't rain this evening so I can go watch the sunset by the water. The rest of this blog was written by AI. But not some one-prompt AI slop 'Write me a blog about X', this came from a 10+ step N8N pipeline that was refined using Claude Code, implemented via the Shopify API, and measured using Google Search Console. 

A **Shopify ecommerce client** we work with grew organic clicks by 17.7% in five weeks, while their impression count actually fell by 10%. That gap is the point of **Claude Code SEO automation** done right: shed the noise, keep the buyers, do it without an agency retainer. The post you're reading was written, fact-checked, and queued to publish by a system we built over a few weekends. We still edited this section three times before you saw it. That's also the point.

![Organic clicks rising from 4,672 to 5,497 over a five-week window, with CTR up from 0.49% to 0.64% and impressions intentionally down 10%](/blog/gsc-trajectory.png)

## What the stack actually is

<a href="https://code.claude.com/docs/en/best-practices" target="_blank" rel="noopener">Claude Code</a> is the build environment. We use it to author the prompts, the slash commands, the skills that fire when relevant, and the plugin that ties them together. Ours is called seo-king. It is internal for now and will probably stay that way for a few more months. Claude Code is also where we test changes before they touch a client's blog; if a prompt regresses, we catch it in the editor rather than in production.

<a href="https://docs.n8n.io/" target="_blank" rel="noopener">n8n</a> is the runtime. The workflow has twelve nodes, give or take, and fires on a manual trigger pointed at a Google Sheet. Each row in that sheet is one blog post in the queue. n8n is the part that doesn't sleep: it pulls keywords, calls the AI nodes, runs the QA scrub, and emails us when a draft is ready. 

The <a href="https://shopify.dev/docs/api/admin" target="_blank" rel="noopener">Shopify Admin API</a> is the publish target for clients on Shopify. The custom app we install needs four scopes: `write_content`, `read_content`, `write_redirects`, `read_redirects`. That is enough to push a blog post, set its slug, write the meta description, and create 301 redirects from any older posts the new one is replacing. For clients on WordPress or a custom-built headless site, the pipeline writes the HTML and a redirect CSV to a folder, and a human takes it from there. We are honest about that tradeoff.

## The twelve steps, in human terms



1. Ask Claude to help target relevant SEO keywords for your business, build am content plan, and research competitors
2. Detects content overlap against the existing blog catalog so we do not write the same post twice (for websites with substantial content)
3. Drafts a preliminary blog plan using GPT-5.2 as a fast first pass
4. Use the preliminary plan for a deeper research query to Perplexity sonar-deep-research
5. Builds a detailed outline using Claude, with the brand voice guide injected and deep research incorporated
6. Writes the post itself with Claude Opus, sixteen thousand tokens, extended thinking budget. This part takes a long time
7. Embeds external links against a curated approved-domains whitelist (i.e. don't link to your competitors)
8. Validates every external URL the model produced and quarantines anything that looks hallucinated
9. Adds internal links from a separate Google Sheet that catalogs the client's site
10. Uses AI image generator or Pexels API for non-AI images to get image content
11. Routes the draft through a final QA pass, also Opus, also with extended thinking
12. Emails a structured review with a cost breakdown, an SEO scorecard, and yellow flags for the human-in-the-loop
13. Human types feedback into Claude Code, changes are implemented

None of that is novel on its own. Plenty of <a href="https://searchengineland.com/claude-code-seo-work-470668" target="_blank" rel="noopener">other Claude Code SEO setups</a> handle individual pieces of this. What is rare is putting all twelve steps into production and pushing the output to a real Shopify store, where rankings are auditable and a client is paying for the result.

## The receipts

The Shopify ecommerce client in this case study had been running flat-line organic for over a year. One or two new posts per month, written by a freelance content team, no consolidation strategy, no real keyword targeting beyond "things tangentially related to what we sell." We ran the pipeline starting in mid-March, with a content consolidation pass in the middle of the window: ten-plus low-quality older posts redirected into a smaller set of stronger pillar articles.

The five-week trailing 28-day window in Google Search Console:

- Clicks: 4,672 to 5,497, a 17.7% lift
- CTR: 0.49% to 0.64%, a 31% relative improvement
- Impressions: 959,960 to 863,813, intentionally down 10% from the consolidation

The impression dip is the part most operators get wrong. Shedding traffic was the strategy. The pages we redirected were ranking on broad informational queries that did not lead to product views or purchases; cutting them concentrated authority into a smaller set of commercial pages. The site is converting traffic now, not just collecting it.

The trajectory is steady, not a one-off bounce. March 15 was 4,672 clicks. March 30 was 4,941. April 9 was 5,347. April 21 was 5,497. CTR rose every fortnight in lockstep.

Three commercial query examples that moved during the window, anonymized:

| Query type | Before | After | Notes |
|---|---|---|---|
| Category head term | 5.4 | 3.1 | Top-three result |
| Geo-modified variant | 10.8 | 9.7 | Onto page one |
| Benefits-style query | 11.5 | 9.4 | Onto page one |

## Not just a content factory

The blog pipeline gets the most attention because it produces the most visible artifact, but content generation is maybe sixty percent of what seo-king does in a given engagement. The other forty percent is unglamorous on-page work that moves rankings without writing a new post.

Concretely:

- **Slug rewrites.** Pages with messy or keyword-poor URLs get rewritten via the Shopify Admin API, with a 301 redirect from the old slug. Some of the case study lift came from this; product pages were sitting on slugs from an old site migration.
- **Title tag and meta description rewrites.** Pull the existing copy via the API, ask Claude for a CTR-optimized rewrite under length limits, diff it against the live version, push only what the human approves.
- **H1 and H2 surgery.** Headings on existing pages get audited against the keyword targets in the content plan. If a top-of-funnel post has an H1 that buries the term, we fix it without rewriting the page.
- **Consolidation without rewriting.** Most "content audits" recommend rewriting twenty pages and never publishing the rewrites. We prefer the cheaper move: pick the strongest version, redirect the weaker ones into it, let internal link equity concentrate. The case study did this with ten-plus posts in an afternoon.

These are the moves an SEO consultant would charge by the hour for. The plugin lets us do them at the speed of search-and-replace.

## "Wait, is this AI slop?"

It is a fair question, and the one we get most often when describing this stack to skeptical operators. The honest answer: the model can write fluent prose at scale, but it cannot tell you whether a claim is true, whether your audience cares, or whether the headline you are chasing is worth chasing. The pipeline handles the parts that are mechanical: research, drafting, formatting, link integrity. We handle the parts that are not. Remove the human from the second category and yes, you get slop. Keep us there and you get something publishable. This post is itself the proof of concept; you tell us if it reads like slop.

## Why Claude Code SEO automation still needs a human

Pipelines that claim to run themselves usually publish things their authors would be embarrassed by if they read them. Ours catches a lot of its own mistakes. In January, the QA node refused to publish three posts because it flagged its own output as probably hallucinating PubMed citations. Those URLs pointed to real papers, just wrong papers; the model had invented plausible-looking IDs. We added a HEAD-check step that validates every external URL against the claim context. It catches roughly 80% of these at the cost of about twenty seconds per post. Not a solved problem, but closer to tractable than it was.

What still needs a human:

- **Claim verification.** If a draft says "studies show X causes Y," and the claim is not from a source we trust, we strip it. The model is not the right judge of what is true.
- **Brand judgment.** The pipeline cannot decide whether a slightly off-topic post is worth publishing for the link equity, or whether a particular phrasing reads as snide rather than dry.
- **Client trust.** Pipelines do not sit in Slack with a client who is anxious about a Google update. We do.

This section, by the way, was edited three times after the model produced it. We do not say that to be cute; we say it because most "AI did it all" claims fall apart on close examination, and we would rather show our work.

## What this displaces, and what it does not

The pipeline is not a replacement for an SEO strategist. It is a replacement for the production line that turns a strategy into shipped posts. That distinction matters when deciding what to buy.

**Agency retainers.** The two-thousand to seven-thousand dollar per month range is mostly priced on people-hours: a strategist, a writer, an editor, a publisher. The pipeline collapses three of those four into model costs of roughly $1.50 to $2.00 per post. The strategist still earns their seat. If your agency is mostly cranking volume, the pipeline competes directly. If they are doing real audit and content strategy work, they are complementary, not duplicative.

**App-store auto-bloggers.** The Shopify app store has solid options at seven to nineteen dollars per month for thirty to one hundred sixty posts. They are not bad. They are also not customizable, not voice-locked, and not auditable. If your store sells generic widgets and you want pages indexed for long-tail keywords, an app might be enough. If your brand has a voice, or if your readers can tell when prose was assembled rather than written, the app output gets thin fast.

**Freelancers.** A good freelance content team writes better single posts than the pipeline does. Full stop. They are also two to ten times more expensive per post and slower to iterate. The pipeline wins when volume and consistency matter more than craft on any given piece.

The right answer for most operators is some hybrid: a strategist for direction, a pipeline for production, a human editor for the final fifteen percent that separates publishable from forgettable.

## Where to go from here

The seo-king plugin we run this on is not public yet. The shape is still settling and we are iterating against a few client engagements before we open it up. If you want this stack running for your store, or you want a second opinion on whether your current SEO setup is leaving money on the table, [get in touch](https://enlightenedinsights.org/#contact). If you would rather build it yourself, the references above are a fine starting point. Two doors. We will meet you at either one.
