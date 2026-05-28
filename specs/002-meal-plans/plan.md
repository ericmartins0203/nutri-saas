# Implementation Plan: Sprint 2 - Meal Plans

## Data model

Add:

- DietPlan
- Meal
- DietStatus enum

## Suggested Prisma models

```prisma
model DietPlan {
  id               String     @id @default(cuid())
  clientId         String
  nutritionistId   String
  title            String
  objective        String?
  generalNotes     String?
  educationalNotes String?
  status           DietStatus @default(DRAFT)
  version          Int        @default(1)
  sourceDietId     String?
  publishedAt      DateTime?
  archivedAt       DateTime?
  createdAt        DateTime   @default(now())
  updatedAt        DateTime   @updatedAt

  client ClientProfile @relation(fields: [clientId], references: [id])
  meals  Meal[]
}

enum DietStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model Meal {
  id            String   @id @default(cuid())
  dietPlanId    String
  name          String
  suggestedTime String?
  content       String
  substitutions String?
  notes         String?
  order         Int
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  dietPlan DietPlan @relation(fields: [dietPlanId], references: [id])
}
```

## Routes

Nutritionist:
- `/app/clients/[clientId]/diet`
- `/app/clients/[clientId]/diet/[dietId]`

Client:
- `/client/diet`

## Server actions/queries

- createDraftDiet(clientId)
- updateDraftDiet(dietId, data)
- saveMeals(dietId, meals)
- createDraftFromPublishedDiet(dietId)
- publishDiet(dietId)
- getClientPublishedDiet(clientId)
- getNutritionistClientDietState(clientId)

## Permission rules

- Nutritionist must own the client.
- Nutritionist can edit only DRAFT diets.
- Client can read only own PUBLISHED diet.
- Publishing must run in a transaction.
