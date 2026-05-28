# Implementation Plan: Sprint 5 - Simple Finance

## Data model

Add:

- ClientBilling
- Payment
- BillingType enum
- BillingRecurrence enum
- BillingStatus enum
- PaymentStatus enum
- PaymentMethod enum

## Suggested Prisma models

```prisma
model ClientBilling {
  id             String        @id @default(cuid())
  clientId       String
  nutritionistId String
  type           BillingType
  amount         Decimal       @db.Decimal(10, 2)
  recurrence     BillingRecurrence?
  dueDay         Int?
  startDate      DateTime?
  endDate        DateTime?
  status         BillingStatus @default(ACTIVE)
  notes          String?
  createdAt      DateTime      @default(now())
  updatedAt      DateTime      @updatedAt

  client   ClientProfile @relation(fields: [clientId], references: [id])
  payments Payment[]
}

enum BillingType {
  RECURRING
  SINGLE
}

enum BillingRecurrence {
  MONTHLY
  BIMONTHLY
  QUARTERLY
  SEMIANNUAL
}

enum BillingStatus {
  ACTIVE
  PAUSED
  FINISHED
}

model Payment {
  id             String        @id @default(cuid())
  clientId       String
  nutritionistId String
  billingId      String?
  amount         Decimal       @db.Decimal(10, 2)
  dueDate        DateTime
  paidAt         DateTime?
  status         PaymentStatus @default(PENDING)
  method         PaymentMethod?
  notes          String?
  createdAt      DateTime      @default(now())
  updatedAt      DateTime      @updatedAt

  client  ClientProfile @relation(fields: [clientId], references: [id])
  billing ClientBilling? @relation(fields: [billingId], references: [id])
}

enum PaymentStatus {
  PENDING
  PAID
  OVERDUE
  CANCELED
}

enum PaymentMethod {
  PIX
  CASH
  CREDIT_CARD
  DEBIT_CARD
  BANK_TRANSFER
  OTHER
}
```

## Routes

Nutritionist:
- `/app/finance`
- `/app/clients/[clientId]/finance`

No client finance routes in MVP.

## Server actions/queries

- configureRecurringBilling(clientId, data)
- createSingleBilling(clientId, data)
- createPayment(data)
- markPaymentAsPaid(paymentId, method)
- cancelPayment(paymentId)
- createNextRecurringPayment(billingId)
- getMonthlyFinanceSummary(nutritionistId)
- getClientFinance(clientId)

## Permission rules

- Only nutritionists can access finance.
- Nutritionist must own the client.
- Client cannot access finance data.
- Payment creation and updates must filter by nutritionistId.
