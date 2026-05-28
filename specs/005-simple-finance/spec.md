# Feature Specification: Sprint 5 - Simple Finance

## Goal
Allow the nutritionist to manually control client payments, supporting recurring plans and single appointments.

## User story
As a nutritionist, I want to track client payments manually so I can know what was received, pending or overdue.

## Functional requirements

- A client can have billing configuration.
- Billing can be RECURRING or SINGLE.
- Recurring billing has amount, recurrence, due day and status.
- Single billing creates one payment.
- A Payment can be PENDING, PAID, OVERDUE or CANCELED.
- A nutritionist can mark a payment as paid manually.
- When a recurring payment is marked as paid, the system can create the next pending payment.
- Financial data is visible only to the nutritionist.
- Client cannot access financial data in the MVP.

## Dashboard summary

Show:
- received this month;
- expected this month;
- pending amount;
- overdue amount;
- active recurring clients;
- single appointments this month.

## Acceptance criteria

- Nutritionist configures recurring billing for a client.
- System creates a pending payment.
- Nutritionist marks payment as paid.
- System creates next recurring payment.
- Nutritionist creates single appointment billing.
- Dashboard shows received, pending and overdue values.
- Client cannot access finance pages or data.

## Out of scope

- Automatic Pix.
- Credit card recurring payment.
- Boleto.
- Invoice generation.
- PDF receipt.
- Automatic payment reminders.
