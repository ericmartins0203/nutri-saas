# Development Workflow

## Branch naming

Use short, sprint-oriented branch names:

- `feature/sprint-1-auth`
- `feature/sprint-2-meal-plans`
- `feature/sprint-3-templates`
- `feature/sprint-4-checkins-progress`
- `feature/sprint-5-finance`
- `fix/invite-token-expiration`

## Pull request checklist

Before merging:

- [ ] Build passes.
- [ ] Prisma schema is valid.
- [ ] Private queries validate ownership.
- [ ] Role guards are server-side.
- [ ] No sensitive data is logged.
- [ ] Related spec/task file is updated.
- [ ] Manual acceptance criteria were checked.

## Codex usage

Prefer giving Codex one sprint or one feature at a time.

Example:

```txt
Implement Sprint 1 following specs/001-nutri-saas-mvp/tasks.md.
Respect .specify/memory/constitution.md and specs/000-security-privacy/spec.md.
Open a PR when complete.
```

## Implementation order

1. Security and auth foundation.
2. Sprint 1 base SaaS.
3. Sprint 2 meal plans.
4. Sprint 3 templates.
5. Sprint 4 check-ins and progress.
6. Sprint 5 simple finance.
