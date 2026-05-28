import { UserRole } from '@prisma/client';

export type SessionUser = {
  id: string;
  role: UserRole;
  nutritionistProfileId?: string | null;
  clientProfileId?: string | null;
};

export function assertNutritionist(user: SessionUser | null | undefined): asserts user is SessionUser {
  if (!user || user.role !== UserRole.NUTRITIONIST) {
    throw new Error('Acesso permitido apenas para nutricionistas.');
  }
}

export function assertClient(user: SessionUser | null | undefined): asserts user is SessionUser {
  if (!user || user.role !== UserRole.CLIENT) {
    throw new Error('Acesso permitido apenas para clientes.');
  }
}

export function canAccessClientProfile(user: SessionUser, client: { id: string; nutritionistId: string; userId?: string | null }) {
  if (user.role === UserRole.NUTRITIONIST) {
    return user.nutritionistProfileId === client.nutritionistId;
  }

  if (user.role === UserRole.CLIENT) {
    return user.id === client.userId || user.clientProfileId === client.id;
  }

  return false;
}
