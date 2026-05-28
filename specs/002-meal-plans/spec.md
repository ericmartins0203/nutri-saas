# Feature Specification: Sprint 2 - Meal Plans

## Goal
Allow the nutritionist to create meal plans as drafts, edit them safely, and publish them only when ready for the client.

## User story
As a nutritionist, I want to create and publish a meal plan for a client so the client can view only the finalized version.

## Functional requirements

- A nutritionist can create a DietPlan for one of their clients.
- A DietPlan starts with status DRAFT.
- A DietPlan contains free-text Meal blocks.
- A Meal can include name, suggested time, content, substitutions, notes and order.
- A client can only view a DietPlan with status PUBLISHED.
- A published DietPlan cannot be edited directly.
- Editing a published DietPlan creates a new DRAFT version.
- Publishing a new version archives the previously published DietPlan.
- A client can have only one active PUBLISHED DietPlan at a time.

## Acceptance criteria

- Nutritionist creates a draft plan from the client profile.
- Nutritionist adds and edits meal blocks.
- Nutritionist publishes the draft.
- Client sees only the published plan.
- Client does not see drafts or archived plans.
- Editing a published plan creates a new draft.
- Publishing a new draft archives the old published version.

## Out of scope

- Diet templates.
- Food database.
- Macro/calorie calculation.
- PDF export.
- Grocery list.
