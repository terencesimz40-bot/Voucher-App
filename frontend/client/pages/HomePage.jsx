import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white sm:px-8">
        <Link className="text-lg font-extrabold tracking-tight" href="/">TEPs <span className="text-sky-300">Electronics</span></Link>
        <span className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">Vourcher-App</span>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <section className="py-10 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.22em] text-sky-700">TEPS ELECTRONICS ZW</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-7xl">Wi-Fi vouchers,<br /><span className="text-sky-600">made simple.</span></h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">Request a Wi-Fi voucher and submit your EcoCash payment reference for staff review.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="rounded-lg bg-sky-700 px-5 py-3.5 font-bold text-white hover:bg-sky-800" href="/clients">Request a voucher</Link>
            <Link className="rounded-lg border border-slate-300 bg-white px-5 py-3.5 font-bold text-slate-800 hover:bg-slate-100" href="/administration">Administration</Link>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Request", "Choose your package and provide your contact details."],
            ["02", "Pay", "Pay using the instructions provided by TEPs Electronics."],
            ["03", "Confirm", "Staff review payment and record voucher issuance."]
          ].map(([number, title, description]) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" key={number}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 font-extrabold text-sky-700">{number}</span>
              <h2 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h2>
              <p className="mt-2 leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </section>
        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Prototype only: requests, payments and voucher generation are not yet connected to the live backend. Do not submit real payment details here.</p>
        <footer className="mt-8 text-sm text-slate-500">Contact TEPs Electronics: <strong className="text-slate-700">0771906932</strong></footer>
      </main>
    </div>
  );
}