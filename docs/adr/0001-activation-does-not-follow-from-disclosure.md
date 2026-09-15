# Activation and lifecycle require consent, not disclosure

Disclosure is not consent. Saying "I have autism" tells the agent who the Reader is; it does not ask the agent to change how every later response is shaped. The skill therefore activates only on a clear whole-mode request and runs for the current conversation, while a request for a single behavior applies through the current task without persisting. Deactivation accepts any unambiguous request, and Tuning may change mode defaults but never safety constraints. Had we kept the original behavior, a personal disclosure would silently switch on ten persistent rules, which is the kind of implicit choice this skill exists to prevent.

## Considered Options

- **Activate on any one behavior request.** Rejected: a request for one behavior would silently enable the other nine, which is another form of hiding an assumption.
- **Keep the mode active across conversations.** Rejected: the skill cannot verify cross-conversation state, so it would claim persistence it cannot guarantee.
- **Restrict deactivation to two exact phrases.** Rejected: a mode built on removing ambiguity should not itself require memorized phrasing.

## Consequences

Evals can no longer be single-prompt files that assume an active mode. The suite moved to an ordered-turn schema so activation, persistence, Tuning, and deactivation are observable, with expectations attached to the turn that produces them. `CONTEXT.md` defines the lifecycle vocabulary that `SKILL.md` and `README.md` must share.
