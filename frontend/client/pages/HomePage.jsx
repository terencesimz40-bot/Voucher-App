import Link from "next/link";

const steps = [
  { number: "01", title: "Choose a plan", description: "Pick the Wi-Fi package that fits your needs." },
  { number: "02", title: "Make payment", description: "Follow the payment instructions from TEPs Electronics." },
  { number: "03", title: "Get connected", description: "Your payment is reviewed before a voucher is issued." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="relative z-10 border-b border-white/10 bg-slate-950 text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-400 text-lg font-black text-slate-950 shadow-lg shadow-sky-500/20">T</span>
            <span className="leading-tight"><span className="block text-base font-black tracking-wide">TEPs Electronics</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-sky-300">Connected simply</span></span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#how-it-works" className="transition hover:text-white">How it works</a>
            <a href="#support" className="transition hover:text-white">Support</a>
          </div>
          <Link href="/clients" className="rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:px-5">Get a voucher <span aria-hidden="true">→</span></Link>
        </nav>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div className="absolute -right-32 -top-28 -z-10 h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-48 left-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-bold tracking-wide text-sky-200"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" /> YOUR LOCAL WI-FI VOUCHER PORTAL</div>
              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Good Wi-Fi.<br /><span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">No complications.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Request your TEPs Electronics Wi-Fi voucher in a few simple steps. Clear instructions, helpful support and a smoother way to get connected.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/clients" className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-400 px-6 py-4 font-extrabold text-slate-950 shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300">Request a Wi-Fi voucher <span aria-hidden="true">↗</span></Link>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10">How it works</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Simple request form</span><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Local customer support</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-sky-400/20 to-indigo-500/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/15 text-xl">⌁</span><div><p className="font-extrabold">Connection hub</p><p className="mt-1 text-xs text-slate-400">Your voucher journey</p></div></div><span className="rounded-full bg-amber-300/10 px-3 py-1.5 text-[11px] font-bold text-amber-200">DEMO PREVIEW</span></div>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-6 text-slate-950"><div className="flex items-start justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-900/70">TEPs CONNECT</p><p className="mt-5 text-3xl font-black">Stay online.</p><p className="mt-2 max-w-xs text-sm leading-6 text-slate-900/75">A simpler way to request your Wi-Fi access.</p></div><span className="text-4xl">⌁</span></div><div className="mt-8 flex items-center justify-between border-t border-slate-950/15 pt-4 text-xs font-bold"><span>REQUEST · REVIEW · CONNECT</span><span>ZW</span></div></div>
                <div className="mt-4 space-y-3">
                  {steps.map((step, index) => <div key={step.number} className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/60 p-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black ${index === 0 ? "bg-sky-300 text-slate-950" : "bg-white/10 text-slate-300"}`}>{step.number}</span><div className="min-w-0"><p className="font-bold">{step.title}</p><p className="mt-1 text-xs leading-5 text-slate-400">{step.description}</p></div><span className="ml-auto text-slate-500">↗</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">A straightforward process</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Three steps to get started</h2><p className="mt-4 leading-7 text-slate-600">We keep the process easy to understand, from your first request to payment review.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => <article key={step.number} className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-700 transition group-hover:bg-sky-500 group-hover:text-white">{step.number}</span><h3 className="mt-6 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.description}</p><div className="mt-6 h-1 w-12 rounded-full bg-sky-400" /></article>)}
          </div>
        </section>

        <section id="support" className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-slate-100 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">Need a hand?</p><h2 className="mt-3 text-2xl font-black tracking-tight">We’re here to help you connect.</h2><p className="mt-2 text-slate-600">Contact TEPs Electronics for assistance with your voucher request.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><a href="tel:0771906932" className="rounded-xl bg-slate-950 px-5 py-3.5 text-center font-extrabold text-white transition hover:bg-slate-800">Call 0771906932</a><Link href="/clients" className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-center font-extrabold text-slate-800 transition hover:border-sky-400">Start a request</Link></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><span>© {new Date().getFullYear()} TEPs Electronics. All rights reserved.</span></div></footer>
    </div>
  );
}