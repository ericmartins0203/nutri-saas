import { PrismaClient, UserRole, CheckInFrequency, CheckInQuestionType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);

  const nutritionistUser = await prisma.user.upsert({
    where: { email: 'nutri@example.com' },
    update: {},
    create: {
      name: 'Nutricionista Demo',
      email: 'nutri@example.com',
      password,
      role: UserRole.NUTRITIONIST,
      nutritionistProfile: {
        create: {
          crn: 'CRN-DEMO',
          phone: '(00) 00000-0000',
        },
      },
    },
    include: { nutritionistProfile: true },
  });

  const nutritionist = nutritionistUser.nutritionistProfile;

  if (!nutritionist) {
    throw new Error('Nutritionist profile was not created.');
  }

  const existingTemplate = await prisma.checkInTemplate.findFirst({
    where: { nutritionistId: nutritionist.id },
  });

  if (!existingTemplate) {
    await prisma.checkInTemplate.create({
      data: {
        nutritionistId: nutritionist.id,
        title: 'Check-in de acompanhamento',
        description: 'Perguntas rápidas para acompanhar evolução e ajustar o plano.',
        frequency: CheckInFrequency.MONTHLY,
        questions: {
          create: [
            { text: 'Qual seu peso atual?', type: CheckInQuestionType.WEIGHT, required: true, order: 1 },
            { text: 'De 0 a 10, quanto você conseguiu seguir o plano alimentar?', type: CheckInQuestionType.SCALE, required: true, order: 2 },
            { text: 'De 0 a 10, como está sua fome ao longo do dia?', type: CheckInQuestionType.SCALE, required: true, order: 3 },
            { text: 'De 0 a 10, como está sua energia?', type: CheckInQuestionType.SCALE, required: true, order: 4 },
            { text: 'De 0 a 10, como está seu sono?', type: CheckInQuestionType.SCALE, required: false, order: 5 },
            { text: 'Você conseguiu praticar atividade física?', type: CheckInQuestionType.BOOLEAN, required: false, order: 6 },
            { text: 'Qual refeição foi mais difícil de seguir?', type: CheckInQuestionType.TEXT, required: false, order: 7 },
            { text: 'O que você gostaria de ajustar no plano?', type: CheckInQuestionType.TEXT, required: false, order: 8 },
          ],
        },
      },
    });
  }

  await prisma.clientProfile.upsert({
    where: { id: 'demo-client-1' },
    update: {},
    create: {
      id: 'demo-client-1',
      nutritionistId: nutritionist.id,
      name: 'Cliente Demo',
      email: 'cliente@example.com',
      height: 1.7,
      initialWeight: 80,
      currentGoal: 'Emagrecimento com foco em constância',
      preferences: 'Refeições simples e rápidas',
      restrictions: 'Sem restrições informadas',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
