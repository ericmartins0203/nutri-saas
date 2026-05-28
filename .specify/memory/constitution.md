# Nutri SaaS Constitution

## Product principles

1. Simple before complete.
   The MVP must prioritize simple flows for independent nutritionists over broad clinic or enterprise features.

2. Professional control.
   The nutritionist creates, reviews and publishes all plans. The system must not prescribe diets automatically in the MVP.

3. Client clarity.
   The client experience must be simple, educational and focused on understanding the plan and evolution.

4. Privacy by default.
   A nutritionist can only access their own clients. A client can only access their own data.

5. Draft before publish.
   Client-facing plans must only become visible after explicit publication.

## Technical principles

- Use TypeScript with strict typing.
- Use Prisma as the data access layer.
- Keep feature code grouped by domain.
- Validate inputs before writing to the database.
- Prefer small server actions/queries with clear permissions.
- Keep MVP features manual before adding automation.

## MVP boundaries

Included:
- independent nutritionist workflow;
- client access;
- free-text meal plans;
- editable standard check-in;
- manual financial control.

Excluded:
- mobile native app;
- food database;
- automatic macro calculation;
- automatic payments;
- clinic/multi-professional mode.
