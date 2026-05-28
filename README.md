# Nutri SaaS

SaaS para nutricionistas independentes acompanharem clientes, criarem planos alimentares com templates, receberem check-ins e visualizarem evolução.

## Stack

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Tailwind CSS
- shadcn/ui
- Recharts

## MVP

### Sprint 1
Base funcional do SaaS:

- autenticação;
- roles `NUTRITIONIST` e `CLIENT`;
- cadastro de nutricionista;
- cadastro de cliente;
- convite por link;
- criação automática do check-in padrão.

### Próximas sprints

- Sprint 2: planos alimentares, rascunho e publicação;
- Sprint 3: templates de plano alimentar;
- Sprint 4: check-ins e evolução;
- Sprint 5: financeiro simples.

## Regras principais

- Nutricionista acessa apenas os próprios clientes.
- Cliente acessa apenas os próprios dados.
- Cliente pode existir sem usuário até aceitar convite.
- Convite deve ser único, pendente e não expirado.
- Ao criar uma nutricionista, o sistema cria um check-in padrão.

## Desenvolvimento

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```
