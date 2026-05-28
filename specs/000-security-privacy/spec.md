# Security and Privacy Specification

## Goal
Define baseline security and privacy rules for the Nutri SaaS MVP.

## Sensitive data

The system may store personal, health-adjacent and financial information, including:

- client identity and contact data;
- weight history;
- dietary preferences and restrictions;
- check-in answers;
- payment status and billing notes.

## Access rules

- A nutritionist can access only clients that belong to their own NutritionistProfile.
- A client can access only their own ClientProfile and related data.
- Financial data is visible only to the nutritionist.
- Client-facing pages must never expose other clients' data.
- Client-facing pages must never expose draft or archived diets.

## Authentication rules

- Passwords must be hashed before storage.
- Plain text passwords must never be logged.
- Sessions must be validated server-side before private data access.
- Role checks must happen server-side, not only in the UI.

## Invite rules

- Invite tokens must be unique and hard to guess.
- Invite tokens must expire.
- Only PENDING and non-expired invites can be accepted.
- Accepted invites cannot be reused.

## Logging rules

Do not log:

- passwords;
- invite tokens;
- check-in answers;
- health notes;
- payment notes;
- full client profile payloads.

## Implementation requirements

- All private queries must validate ownership.
- Server actions must validate input with schemas.
- Prisma queries in nutritionist routes must filter by `nutritionistId`.
- Prisma queries in client routes must filter by authenticated client id/profile id.
- Error messages must not reveal whether another user's data exists.

## Acceptance criteria

- CLIENT cannot access `/app` routes.
- NUTRITIONIST cannot access clients from another nutritionist.
- CLIENT cannot access finance data.
- Invite cannot be used after accepted or expired.
- Private data access has server-side permission checks.
