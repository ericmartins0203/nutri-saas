# Tasks: Nutri SaaS MVP

## Sprint 1 - Base SaaS

- [ ] Configure authentication.
- [ ] Implement nutritionist registration.
- [ ] Create NutritionistProfile after registration.
- [ ] Create default CheckInTemplate after registration.
- [ ] Implement login and logout.
- [ ] Protect `/app/*` routes for NUTRITIONIST.
- [ ] Protect `/client/*` routes for CLIENT.
- [ ] Implement client creation by nutritionist.
- [ ] Generate invite token.
- [ ] Implement `/invite/[token]`.
- [ ] Accept invite and create CLIENT user.
- [ ] Link CLIENT user to ClientProfile.

## Sprint 2 - Meal plans

- [ ] Add DietPlan model.
- [ ] Add Meal model.
- [ ] Create draft meal plan.
- [ ] Add/edit meals in free text.
- [ ] Publish meal plan.
- [ ] Archive previous published plan.
- [ ] Show only published plan to client.

## Sprint 3 - Templates

- [ ] Add DietTemplate model.
- [ ] Add TemplateMeal model.
- [ ] Create template editor.
- [ ] Apply template to client.
- [ ] Copy template meals to draft DietPlan.

## Sprint 4 - Check-ins and progress

- [ ] Add CheckIn model.
- [ ] Add CheckInAnswer model.
- [ ] Add WeightLog model.
- [ ] Implement check-in availability calculation.
- [ ] Implement client check-in form.
- [ ] Save answer snapshots.
- [ ] Generate WeightLog from WEIGHT answer.
- [ ] Show basic progress to client.
- [ ] Show check-in history to nutritionist.

## Sprint 5 - Simple finance

- [ ] Add ClientBilling model.
- [ ] Add Payment model.
- [ ] Configure recurring billing.
- [ ] Configure single appointment billing.
- [ ] Mark payment as paid.
- [ ] Generate next recurring payment after payment.
- [ ] Show monthly financial summary.
- [ ] Restrict finance to nutritionist only.
