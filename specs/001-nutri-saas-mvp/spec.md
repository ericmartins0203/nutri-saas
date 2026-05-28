# Feature Specification: Nutri SaaS MVP

## User stories

### US1 - Nutritionist onboarding
As an independent nutritionist, I want to create my account so I can manage my clients in one place.

Acceptance criteria:
- A nutritionist can register and log in.
- A NutritionistProfile is created after registration.
- A default CheckInTemplate is created automatically.

### US2 - Client registration and invite
As a nutritionist, I want to register a client and send an invite link so the client can access their own area.

Acceptance criteria:
- A nutritionist can create a ClientProfile without a User.
- The system generates a unique invite token.
- The invite can expire.
- The client can accept the invite and create access.
- The client becomes linked to the correct nutritionist.

### US3 - Meal plan draft and publication
As a nutritionist, I want to create meal plans as drafts and publish them only when ready.

Acceptance criteria:
- A meal plan starts as DRAFT.
- The client cannot see drafts.
- Publishing a plan makes it visible to the client.
- Publishing a new version archives the previous published plan.

### US4 - Diet templates
As a nutritionist, I want to create reusable templates so I can create plans faster.

Acceptance criteria:
- A nutritionist can create and edit templates.
- A template can be applied to a client.
- Applying a template creates a draft DietPlan.
- Editing a template does not change already created DietPlans.

### US5 - Check-ins and evolution
As a client, I want to answer check-ins and see my progress.

Acceptance criteria:
- A client can answer the nutritionist's standard check-in.
- Answers keep a snapshot of the original question.
- Weight answers can generate WeightLog records.
- The client sees basic evolution data.
- The nutritionist sees the client's check-in history.

### US6 - Simple finance
As a nutritionist, I want to control payments manually so I know who paid and who is pending.

Acceptance criteria:
- A client can have recurring billing or a single appointment billing.
- Payments can be marked as pending, paid, overdue or canceled.
- Financial data is visible only to the nutritionist.

## Functional requirements

- The system must support NUTRITIONIST and CLIENT roles.
- The nutritionist area must be protected from clients.
- The client area must be protected from nutritionists when accessing client-specific pages.
- A nutritionist must only query clients that belong to their own profile.
- A client must only query their own data.
- The MVP must use free-text meal descriptions.
- The MVP must not calculate calories or macros automatically.
- The MVP must not include automatic payment processing.

## Success criteria

- A nutritionist can onboard, create a client and invite them.
- A client can create access and view their area.
- A nutritionist can create and publish a meal plan.
- A client can answer check-ins and see progress.
- A nutritionist can manually track payments.
