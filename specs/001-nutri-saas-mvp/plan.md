# Implementation Plan: Nutri SaaS MVP

## Technical context

- Framework: Next.js with App Router
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Styling: Tailwind CSS
- UI: shadcn/ui planned
- Charts: Recharts planned
- Deployment target: Vercel

## Architecture

The project should use a feature-oriented structure:

```txt
src/
  app/
    (auth)/
    app/
    client/
  components/
    ui/
    layout/
    forms/
  features/
    auth/
    nutritionists/
    clients/
    invites/
    diets/
    templates/
    check-ins/
    billing/
  lib/
    prisma.ts
    permissions.ts
  server/
    actions/
    queries/
```

## Data model phases

### Phase 1
- User
- NutritionistProfile
- ClientProfile
- Invite
- CheckInTemplate
- CheckInQuestion

### Phase 2
- DietPlan
- Meal

### Phase 3
- DietTemplate
- TemplateMeal

### Phase 4
- CheckIn
- CheckInAnswer
- WeightLog

### Phase 5
- ClientBilling
- Payment

## Security and permissions

- Server-side checks are required for all private data access.
- Client-side route hiding is not enough.
- Every nutritionist query must filter by `nutritionistId`.
- Every client query must filter by the authenticated client's profile.

## Development order

1. Base project setup.
2. Authentication and roles.
3. Nutritionist onboarding.
4. Client registration and invite acceptance.
5. Meal plan draft and publication.
6. Diet templates.
7. Check-ins and evolution.
8. Simple billing.

## Testing strategy

MVP starts with manual acceptance tests per sprint.
Automated tests can be added after the core flows stabilize.

Manual flows to verify:
- nutritionist registration;
- nutritionist login;
- client creation;
- invite acceptance;
- role-based route protection;
- published-only diet visibility;
- check-in answer persistence;
- billing visibility restricted to nutritionist.
