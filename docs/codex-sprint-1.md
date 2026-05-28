# Codex Task - Sprint 1

## Contexto
Este projeto é um SaaS para nutricionistas independentes acompanharem clientes, criarem planos alimentares com templates, receberem check-ins e visualizarem evolução.

A Sprint 1 deve criar a base funcional do produto.

## Stack

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Tailwind CSS
- shadcn/ui futuramente

## Objetivo da Sprint 1

Criar autenticação, papéis de usuário, cadastro de nutricionista, cadastro de cliente e convite por link.

## Já existe no repositório

- README inicial
- package.json
- configuração Next/TypeScript/Tailwind
- Prisma schema inicial
- landing page básica
- singleton do Prisma
- helpers iniciais de permissão

## Implementar

### Autenticação

- cadastro de nutricionista;
- login;
- logout;
- sessão segura;
- proteção de rotas privadas.

### Onboarding da nutricionista

Ao criar uma nutricionista:

- criar User com role NUTRITIONIST;
- criar NutritionistProfile;
- criar CheckInTemplate padrão;
- criar perguntas padrão do check-in.

Perguntas padrão sugeridas:

1. Qual seu peso atual?
2. De 0 a 10, quanto você conseguiu seguir o plano alimentar?
3. De 0 a 10, como está sua fome ao longo do dia?
4. De 0 a 10, como está sua energia?
5. De 0 a 10, como está seu sono?
6. Você conseguiu praticar atividade física?
7. Qual refeição foi mais difícil de seguir?
8. Teve alguma dificuldade, exagero alimentar ou vontade intensa de comer algo?
9. O que você gostaria de ajustar no plano?
10. Alguma observação para sua nutricionista?

### Clientes

- tela de listagem de clientes em `/app/clients`;
- formulário de novo cliente;
- criação de ClientProfile sem userId inicialmente;
- perfil básico do cliente em `/app/clients/[clientId]`.

### Convites

- gerar token único;
- criar Invite com expiração;
- criar página `/invite/[token]`;
- validar convite PENDING e não expirado;
- criar User CLIENT no aceite do convite;
- vincular User ao ClientProfile;
- marcar Invite como ACCEPTED.

### Permissões

- `/app/*` exige NUTRITIONIST;
- `/client/*` exige CLIENT;
- nutricionista acessa apenas clientes próprios;
- cliente acessa apenas dados próprios.

## Critérios de pronto

- Nutricionista cria conta e entra.
- Nutricionista cadastra cliente.
- Sistema gera link de convite.
- Cliente cria acesso pelo link.
- Cliente fica vinculado à nutricionista correta.
- CLIENT não acessa `/app`.
- NUTRITIONIST não acessa dados de outra nutricionista.

## Fora da Sprint 1

- planos alimentares;
- templates;
- respostas de check-in;
- evolução;
- financeiro;
- notificações.
