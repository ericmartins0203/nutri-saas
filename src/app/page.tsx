export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-600">Nutri SaaS</p>
        <h1 className="text-4xl font-bold tracking-tight">Acompanhamento nutricional simples, visual e educativo.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Plataforma para nutricionistas independentes criarem planos alimentares, acompanharem check-ins e mostrarem evolução aos clientes.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          <span className="rounded-full bg-slate-100 px-4 py-2">Planos alimentares</span>
          <span className="rounded-full bg-slate-100 px-4 py-2">Check-ins</span>
          <span className="rounded-full bg-slate-100 px-4 py-2">Evolução</span>
          <span className="rounded-full bg-slate-100 px-4 py-2">Financeiro simples</span>
        </div>
      </section>
    </main>
  );
}
