# Feature Specification: Sprint 4 - Check-ins and Progress

## Goal
Allow clients to answer recurring check-ins, register weight, and view basic progress.

## User story
As a client, I want to answer check-ins and see my progress so I understand how my process is evolving beyond only weight.

## Functional requirements

- A client can answer the nutritionist's active standard CheckInTemplate.
- The same template applies to all active clients of the nutritionist in the MVP.
- Check-in availability is calculated from the last answered CheckIn and the template frequency.
- The system does not create pending CheckIn records in the MVP.
- Answers must store snapshots of question text and type.
- A WEIGHT answer can generate a WeightLog.
- The nutritionist can see the client's check-in history.
- The client can see basic progress.

## Progress data

Show:
- initial weight;
- latest weight;
- weight difference;
- average adherence;
- average hunger;
- average energy;
- latest check-ins.

## Acceptance criteria

- Client sees when check-in is available.
- Client answers check-in successfully.
- Answers are stored with snapshots.
- WEIGHT answer creates WeightLog.
- Client sees basic progress.
- Nutritionist sees check-in history.
- Client cannot edit old answers.
- Nutritionist cannot alter client answers.

## Out of scope

- AI interpretation.
- Advanced alerts.
- WhatsApp/email notifications.
- Per-client custom questionnaire.
- Complex charts.
