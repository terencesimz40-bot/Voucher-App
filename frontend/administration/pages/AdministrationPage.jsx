import Link from "next/link";

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white sm:px-8">
        <Link className="text-lg font-extrabold tracking-tight" href="/">TEPs <span className="text-sky-300">Electronics</span></Link>
        <span className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">Administration</span>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <Link className="text-sm font-bold text-sky-700 hover:text-sky-900" href="/">← Home</Link>
        <section className="py-9">
          <p className="text-xs font-extrabold tracking-[0.22em] text-sky-700">STAFF WORKSPACE</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Voucher administration</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Review voucher requests, confirm payments and record voucher issuance.</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm text-slate-500"><span className="h-2 w-2 rounded-full bg-amber-400" /> Backend not connected</div>
          <h2 className="mt-4 text-xl font-extrabold text-slate-900">Admin dashboard</h2>
          <p className="mt-2 leading-6 text-slate-600">This dashboard is a prototype. Supabase authentication, admin role checks and server-side policies must be implemented before it can display customer data.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Total requests", "Payments to review", "Vouchers issued"].map((label) => (
              <div key={label} className="rounded-xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-black text-slate-900">—</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="mt-8 text-xs text-slate-500">TEPs Electronics · Administration tools are not active yet.</footer>
      </main>
    </div>
  );
}