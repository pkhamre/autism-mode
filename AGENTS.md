# AGENTS.md

This repo is one agent skill. `SKILL.md` at the repo root is the product. There is no package, build, lint, or test command: verification is loading the skill and observing its behavior.

## Layout

- `SKILL.md` — source of truth: frontmatter plus the rules the agent follows.
- `README.md` — user-facing overview. Its numbered rule list must stay in sync with `SKILL.md`.
- `evals/evals.json` — eval prompts and observable expectations.
- `CONTRIBUTING.md` — contribution rules and the eval schema.

## Editing SKILL.md

- Frontmatter accepts only `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. `name` is `i-have-autism` and must not change; it determines the install path.
- `description` is the trigger, not documentation. Rewording it changes when the skill fires; treat it as behavior.
- Keep each rule complete, with a why and a concrete Bad/Good pair. Keep terminology stable across the file (that is the skill's own rule 6). Do not compress a rule into a slogan.
- If a rule changes, update the numbered list in `README.md`.

## Local install is a snapshot

Install with `npx skills add pkhamre/i-have-autism`. `.agents/` and `skills-lock.json` are gitignored.

Editing the root `SKILL.md` does not update the installed copy at `.agents/skills/i-have-autism/SKILL.md`. Resync it before testing, or you will test the old file.

After resyncing, recompute the lock hash and write it to `skills-lock.json` (or the CLI will see the install as modified). The hash is SHA-256 over each file's `relativePath` + raw content, files sorted by `relativePath.localeCompare`, skipping `.git` and `node_modules`. This is the vercel-labs/skills lock format.

## Evals

- Schema: `{skill_name, evals:[{id, prompt, expected_output, files, expectations:[...]}]}`.
- Every expectation must be objectively checkable, for example "labels the 401 as a fact and the token-expiry belief as an inference". "Writes well" is not an expectation.
- There is no eval runner here. Run each case with and without the skill and compare.

## Testing the skill

Load it and turn it on with "autism mode" or by invoking the skill. It stays on until "stop autism mode" or "normal mode".

## Conventions

- Commit messages use conventional prefixes (`feat:`, `docs:`, `chore:`) in the imperative mood.
- Documentation prose is kept free of AI-writing tells; use the `humanizer` skill for this when it is installed.
- This skill is a sibling of `i-have-adhd`. Keep that relationship explicit and do not turn this into a terseness skill.
