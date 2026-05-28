# Tasks: Security and Privacy

## Auth

- [ ] Hash passwords before saving users.
- [ ] Never return password fields from queries.
- [ ] Implement server-side session validation.
- [ ] Implement server-side role guards.

## Ownership

- [ ] Add ownership checks to all nutritionist client queries.
- [ ] Add ownership checks to all client area queries.
- [ ] Block CLIENT access to `/app/*`.
- [ ] Block NUTRITIONIST access to unrelated client data.

## Invites

- [ ] Generate secure random invite tokens.
- [ ] Validate invite status before acceptance.
- [ ] Validate invite expiration before acceptance.
- [ ] Mark invite as ACCEPTED after use.
- [ ] Prevent invite reuse.

## Data exposure

- [ ] Hide finance data from clients.
- [ ] Hide draft diets from clients.
- [ ] Hide archived diets from clients.
- [ ] Avoid logging sensitive payloads.

## Validation

- [ ] Validate server action inputs with Zod.
- [ ] Return generic errors for unauthorized access.
- [ ] Add manual QA cases for role isolation.
