# Tasks: Sprint 4 - Check-ins and Progress

## Prisma

- [ ] Add CheckIn model.
- [ ] Add CheckInAnswer model.
- [ ] Add WeightLog model.
- [ ] Add WeightSource enum.
- [ ] Add relations to ClientProfile if needed.
- [ ] Run migration.

## Backend

- [ ] Implement getActiveCheckInTemplate.
- [ ] Implement getLastClientCheckIn.
- [ ] Implement isCheckInAvailable.
- [ ] Implement submitCheckIn.
- [ ] Store question snapshots.
- [ ] Generate WeightLog from WEIGHT answer.
- [ ] Implement getClientProgress.
- [ ] Implement getClientCheckInHistory.

## UI - Client

- [ ] Add check-in availability card on client home.
- [ ] Build `/client/check-in` form.
- [ ] Build `/client/progress` page.
- [ ] Show progress empty state.

## UI - Nutritionist

- [ ] Add check-ins section to client profile.
- [ ] Show check-in history.
- [ ] Show basic progress metrics.

## QA

- [ ] Client can answer check-in only when available.
- [ ] WEIGHT answer creates WeightLog.
- [ ] Snapshots are preserved after template question edit.
- [ ] Client cannot edit old answers.
- [ ] Nutritionist cannot alter client answers.
