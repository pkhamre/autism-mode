# i-have-autism

**Autism-friendly outputs. No mind reading required.**

A skill for your coding assistant that stops it from making you read between the lines. Assumptions are stated, scope is defined, uncertainty is labeled, and nothing is left for you to infer.

No autism diagnosis needed. These are precise-communication defaults, useful to anyone who would rather not guess what the agent meant.

## What it does

Most agents communicate by implication. They pick a meaning for your vague request, blend facts with guesses, change the plan without saying so, and assume you share conventions you have never seen. Many readers never notice the friction. For many autistic readers it is the problem: the answer is present, but the meaning is not.

This skill changes the shape of the agent's output so the meaning is on the page:

- assumptions, prerequisites, and hidden dependencies are stated, not implied
- facts, inferences, and uncertainties are labeled separately
- scope is explicit, including what will not change
- "done" is defined as something observable
- plan changes are announced with a reason
- terminology stays stable, names don't drift
- language is literal by default; no idioms, sarcasm, or rhetorical questions
- choices are bounded into concrete options
- ambiguity is surfaced before acting, not silently resolved

## What changes

### Before

> This should be pretty straightforward. We can probably reuse the existing auth middleware and clean up the token handling while we're in there. I'll update the relevant bits and then we can see if anything else needs adjusting.

### After

> **Goal:** accept expired refresh tokens only through `/auth/refresh`.
>
> **Assumption:** access tokens must still reject expired tokens.
>
> **Changes:**
> `src/auth/verify.ts`: split refresh-token verification from access-token verification.
> `src/routes/refresh.ts`: use the refresh-token verifier.
>
> **Not changing:** database schema, token format, `/auth/login`.
>
> **Done when:** existing auth tests pass, and an expired refresh-token test passes.
>
> **Uncertainty:** none currently.

The ADHD sibling leads with the action. This one leads with the meaning.

## The rules

Full text in [SKILL.md](SKILL.md).

1. Make the implicit explicit.
2. Separate fact, inference, and uncertainty.
3. Say what will change — and what will not.
4. Define what "done" means.
5. No silent changes of plan.
6. One thing, one name.
7. Use literal language by default.
8. Bound choices and questions.
9. Remove social guesswork.
10. Prefer predictable structure.

One behavior ties the rest together: **surface ambiguity**. If a choice is reversible and low-cost, the agent states its assumption and continues. If it is irreversible or high-impact, the agent stops and offers concrete options.

## Complete, not terse

This skill does not mean writing less. Missing context creates uncertainty, and removing that uncertainty is the point. Be complete without padding, and explicit without oversimplifying. Some readers want the extra detail, because missing context is the problem.

## Pairs with i-have-adhd

`i-have-adhd` reduces friction so you can start. `i-have-autism` reduces ambiguity so you can trust what you read. Enable both and you get **explicit and executable**: the action first, then the assumptions, scope, and completion conditions. When they conflict, clarity of meaning outranks brevity.

## Install

With the [`skills`](https://github.com/vercel-labs/skills) CLI:

```
npx skills add pkhamre/i-have-autism
```

The repository is a single skill in plain `SKILL.md` form, so it also works by placing `SKILL.md` where your runtime discovers skills:

- OpenCode: `.agents/skills/i-have-autism/SKILL.md`, or `~/.config/opencode/skills/i-have-autism/SKILL.md` for every project.
- Claude Code, Codex, Cursor, and other agent-compatible runtimes discover the same `SKILL.md` under `.claude/skills/` or `.agents/skills/`.

Then turn it on for a session by asking for "autism mode" or invoking the skill. It stays on until you say "stop autism mode" or "normal mode".

## Tune it

Fork, edit `SKILL.md`, and keep your copy. The rules are defaults, not a diagnosis. If a rule fights how you actually want to read, change it.

## Who this is for

Autistic people differ. Communication preferences vary widely, and this skill is a set of configurable defaults, not a claim that every autistic person communicates or reads the same way. It draws on widely reported preferences for direct, precise, unambiguous language and predictable structure, but you should adjust it to the individual.

## Credits

Inspired by [i-have-adhd](https://github.com/ayghri/i-have-adhd), which showed that output shape is an accessibility surface. It also draws on the National Autistic Society's guidance on autism and communication, which notes that individual preferences vary but that direct, precise language and predictability help many autistic people.

## License

MIT.
