# Feature Specification: Sprint 3 - Diet Templates

## Goal
Allow the nutritionist to create reusable diet templates and apply them to clients as draft meal plans.

## User story
As a nutritionist, I want reusable templates so I can create meal plans faster while still reviewing and personalizing them before publication.

## Functional requirements

- A nutritionist can create a DietTemplate.
- A DietTemplate contains TemplateMeal blocks.
- Template meals use free-text content.
- A template can include substitutions and educational notes.
- A template belongs to one nutritionist.
- A client cannot access templates.
- Applying a template to a client creates a DietPlan with status DRAFT.
- Applying a template copies TemplateMeal records into Meal records.
- Editing a template does not update already created DietPlans.

## Acceptance criteria

- Nutritionist creates and edits a template.
- Nutritionist applies a template to a client.
- A draft DietPlan is created from the template.
- Template meals are copied into the draft plan.
- Client does not see templates.
- Client does not see the generated draft until it is published.

## Out of scope

- Marketplace of templates.
- Shared templates between nutritionists.
- AI-generated templates.
- Food database.
- Macro/calorie calculation.
