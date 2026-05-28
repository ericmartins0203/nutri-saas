# Implementation Plan: Sprint 3 - Diet Templates

## Data model

Add:

- DietTemplate
- TemplateMeal

## Suggested Prisma models

```prisma
model DietTemplate {
  id               String   @id @default(cuid())
  nutritionistId   String
  title            String
  objective        String?
  generalNotes     String?
  educationalNotes String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  nutritionist NutritionistProfile @relation(fields: [nutritionistId], references: [id])
  meals        TemplateMeal[]
}

model TemplateMeal {
  id            String   @id @default(cuid())
  templateId    String
  name          String
  suggestedTime String?
  content       String
  substitutions String?
  notes         String?
  order         Int
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  template DietTemplate @relation(fields: [templateId], references: [id])
}
```

## Routes

Nutritionist:
- `/app/templates`
- `/app/templates/new`
- `/app/templates/[templateId]`
- `/app/clients/[clientId]/diet/from-template`

## Server actions/queries

- createDietTemplate(data)
- updateDietTemplate(templateId, data)
- deleteDietTemplate(templateId)
- getDietTemplates()
- getDietTemplateById(templateId)
- applyTemplateToClient(templateId, clientId)

## Permission rules

- A nutritionist can access only own templates.
- Applying a template requires ownership of both template and client.
- Applying a template creates a DRAFT DietPlan.
- Applying a template must not publish the DietPlan automatically.
