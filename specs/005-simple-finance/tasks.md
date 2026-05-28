# Tasks: Sprint 5 - Simple Finance

## Prisma

- [ ] Add ClientBilling model.
- [ ] Add Payment model.
- [ ] Add BillingType enum.
- [ ] Add BillingRecurrence enum.
- [ ] Add BillingStatus enum.
- [ ] Add PaymentStatus enum.
- [ ] Add PaymentMethod enum.
- [ ] Add relations to ClientProfile if needed.
- [ ] Run migration.

## Backend

- [ ] Implement configureRecurringBilling.
- [ ] Implement createSingleBilling.
- [ ] Implement createPayment.
- [ ] Implement markPaymentAsPaid.
- [ ] Implement cancelPayment.
- [ ] Implement createNextRecurringPayment.
- [ ] Implement getMonthlyFinanceSummary.
- [ ] Implement getClientFinance.

## UI - Nutritionist

- [ ] Add finance navigation item.
- [ ] Build `/app/finance` summary page.
- [ ] Add finance tab to client profile.
- [ ] Build recurring billing form.
- [ ] Build single appointment form.
- [ ] Build payments list.
- [ ] Add mark as paid action.

## QA

- [ ] Nutritionist can configure recurring billing.
- [ ] System creates pending payment.
- [ ] Marking recurring payment as paid creates next pending payment.
- [ ] Nutritionist can create single appointment billing.
- [ ] Finance summary shows received, pending and overdue.
- [ ] Client cannot access finance pages or data.
