# Contributing

Thanks for helping. This project is a single skill, so almost all of it is prose that changes how a coding agent talks. Wording fixes are welcome, and so are new examples and eval cases.

## What helps

- Fixing a rule that is vague, wrong, or too strict.
- Adding a Bad/Good example to an existing rule.
- Adding an eval case for a situation the skill handles badly.
- Correcting the README or this file.
- Reporting behavior you did not expect, with the prompt you used and the output you got.

## The one constraint

What matters is how the agent behaves, and that behavior lives in `SKILL.md`. Keep rules complete. The skill exists to remove uncertainty, so do not shorten a rule into a slogan if that drops a condition. Keep terminology stable across the file. That is rule 6, and it applies to contributors too.

## Editing SKILL.md

`SKILL.md` at the repo root is the source of truth:

- The YAML frontmatter only uses the fields the skills CLI accepts: `name`, `description`, `license`, `compatibility`, `metadata`, and `allowed-tools`. The `name` must match the folder name.
- The `description` decides when the skill triggers. Rewording it changes both the trigger and the reading. If you change it, explain why in the pull request.
- Each rule explains why it exists, then gives a Bad example and a Good example. The examples carry most of the meaning, so keep them concrete.
- Do not weaken a rule to make a change pass. If the rule itself is wrong, open an issue first and describe the case it fails.

If you change a rule or its wording, check the rule list in the README and update it if needed.

## Adding eval cases

Eval cases live in `evals/evals.json`. They check that the skill changes the agent's output in a specific, observable way. The schema:

```json
{
  "skill_name": "i-have-autism",
  "evals": [
    {
      "id": 1,
      "prompt": "the request given to the agent",
      "expected_output": "a plain description of the expected result",
      "files": [],
      "expectations": [
        "an objectively checkable statement about the output"
      ]
    }
  ]
}
```

Write each expectation so a reader can mark it pass or fail without arguing about taste. For example, you can check "labels the 401 as an observed fact and the token-expiry belief as an unverified inference"; you cannot check "writes well".

## Before you open a pull request

1. Load the skill and try it on a realistic prompt. It turns on with "autism mode" or by invoking the skill.
2. Confirm the frontmatter parses and the `name` matches the folder name.
3. If you added or changed an eval, run it with and without the skill and note the difference.
4. Keep one logical change per pull request.
5. Update the README if the change affects what the README describes.

There is no build step and no test command, so the checks above are the whole process.

## Commit messages

This repo uses conventional prefixes such as `feat:`, `docs:`, and `chore:`. Write the message in the imperative mood, for example `docs: clarify the scope rule`.

## Local installs

`.agents/` and `skills-lock.json` are gitignored, so do not commit them. If you install the skill locally and then edit `SKILL.md`, resync the installed copy before you test, or your test will run the old file.

## Conduct

This project is about communication differences, so keep discussion direct and respectful. Do not debate whether a person is autistic or whether their preference is valid. The skill documents defaults that people tune, not a diagnosis.

## License

The project is MIT licensed. By contributing, you agree to license your work under the same terms. There is no CLA.
