import Link from "next/link";

const steps = [
  { number: "01", title: "Choose your package", text: "Tell us which Wi-Fi plan you need." },
  { number: "02", title: "Make your payment", text: "Pay using the payment method provided." },
  { number: "03", title: "Get connected", text: "Your voucher is issued after payment review." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="relative z-10 border-b border-white/10 bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-400 text-xl font-black text-slate-950">T</span><span className="min-w-0"><span className="block truncate text-base font-black tracking-tight sm:text-lg">TEPs Electronics</span><span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs">Wi-Fi voucher portal</span></span></Link>
          <a href="tel:0771906932" className="rounded-xl border border-white/15 px-3 py-2.5 text-xs font-bold text-slate-200 transition hover:border-sky-300 hover:text-sky-200 sm:px-4 sm:text-sm">Call 0771906932</a>
        </nav>
      </header>
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute -right-40 -top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl sm:h-[34rem] sm:w-[34rem]" /><div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" /></div>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-28">
          <div><span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sky-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Easy Wi-Fi access</span><h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Good Wi-Fi.<span className="block text-sky-300">No complications.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Request your Wi-Fi voucher with TEPs Electronics. Simple steps, clear communication, and support when you need it.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/clients" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-300/30">Request a Wi-Fi voucher <span aria-hidden="true">→</span></Link><Link href="/clients" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5">View request form</Link></div><div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Simple request process</span><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Customer support available</span></div></div>
          <div className="mx-auto w-full max-w-lg"><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7"><div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Quick start</p><h2 className="mt-2 text-xl font-black sm:text-2xl">Get connected in 3 steps</h2></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-400/10 text-2xl text-sky-200">⌁</span></div><div className="mt-2 divide-y divide-white/10">{steps.map((step) => <div key={step.number} className="flex gap-4 py-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sm font-black text-sky-200">{step.number}</span><div><h3 className="font-extrabold">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{step.text}</p></div></div>)}</div><Link href="/clients" className="mt-2 flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-sky-100">Start your request <span className="ml-2">↗</span></Link><p className="mt-4 text-center text-xs leading-5 text-slate-500">Voucher issuance follows payment review. Do not share your payment PIN.</p></div></div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-slate-900/70"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="text-sm font-extrabold">Need help with your request?</p><p className="mt-1 text-sm text-slate-400">Contact TEPs Electronics customer support.</p></div><a href="tel:0771906932" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 px-5 py-3 text-sm font-extrabold text-sky-200 transition hover:bg-sky-300/15">☎ <span className="ml-2">0771906932</span></a></div></section>
      <footer className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} TEPs Electronics · Wi-Fi voucher portal</footer>
    </main>
  );
}
