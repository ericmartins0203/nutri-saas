# Implementation Plan: Sprint 4 - Check-ins and Progress

## Data model

Add:

- CheckIn
- CheckInAnswer
- WeightLog
- WeightSource enum

## Suggested Prisma models

```prisma
model CheckIn {
  id                    String   @id @default(cuid())
  clientId              String
  nutritionistId        String
  templateId            String
  templateTitleSnapshot String
  answeredAt            DateTime @default(now())
  createdAt             DateTime @default(now())

  client  ClientProfile @relation(fields: [clientId], references: [id])
  answers CheckInAnswer[]
}

model CheckInAnswer {
  id                   String              @id @default(cuid())
  checkInId            String
  questionId           String
  questionTextSnapshot String
  questionTypeSnapshot CheckInQuestionType
  value                String
  createdAt            DateTime @default(now())

  checkIn CheckIn @relation(fields: [checkInId], references: [id])
}

model WeightLog {
  id        String       @id @default(cuid())
  clientId  String
  value     Decimal      @db.Decimal(5, 2)
  date      DateTime
  source    WeightSource
  createdAt DateTime     @default(now())

  client ClientProfile @relation(fields: [clientId], references: [id])
}

enum WeightSource {
  CLIENT
  NUTRITIONIST
  CHECK_IN
}
```

## Routes

Client:
- `/client/check-in`
- `/client/progress`

Nutritionist:
- `/app/clients/[clientId]/check-ins`
- `/app/clients/[clientId]/progress`

## Server actions/queries

- getActiveCheckInTemplate(nutritionistId)
- getLastClientCheckIn(clientId)
- isCheckInAvailable(clientId)
- submitCheckIn(clientId, answers)
- createWeightLogFromCheckIn(answer)
- getClientProgress(clientId)
- getClientCheckInHistory(clientId)

## Permission rules

- Client can submit only own check-in.
- Nutritionist can view only own client's check-ins.
- Neither client nor nutritionist can edit old CheckInAnswer records.
