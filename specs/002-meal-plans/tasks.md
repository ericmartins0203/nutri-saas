# Tasks: Sprint 2 - Meal Plans

## Prisma

- [ ] Add DietStatus enum.
- [ ] Add DietPlan model.
- [ ] Add Meal model.
- [ ] Add relations to ClientProfile if needed.
- [ ] Run migration.

## Backend

- [ ] Implement createDraftDiet.
- [ ] Implement updateDraftDiet.
- [ ] Implement saveMeals.
- [ ] Implement createDraftFromPublishedDiet.
- [ ] Implement publishDiet with transaction.
- [ ] Implement getClientPublishedDiet.
- [ ] Implement getNutritionistClientDietState.

## UI - Nutritionist

- [ ] Add Diet section to client profile.
- [ ] Add create draft button.
- [ ] Build diet editor form.
- [ ] Build meal block editor.
- [ ] Add save draft action.
- [ ] Add publish action.
- [ ] Show current published plan and draft state.

## UI - Client

- [ ] Add `/client/diet` page.
- [ ] Show only published plan.
- [ ] Show empty state when no published plan exists.

## QA

- [ ] Client cannot see draft.
- [ ] Client cannot see archived plan.
- [ ] Nutritionist cannot edit published plan directly.
- [ ] New publication archives previous plan.
