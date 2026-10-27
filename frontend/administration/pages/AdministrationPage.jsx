import Link from "next/link";
import { motion } from "motion/react";

const metrics = [
  { label: "Total requests", value: "—", note: "Awaiting backend connection", symbol: "↗", tone: "bg-sky-50 text-sky-700" },
  { label: "Payments to review", value: "—", note: "Payment review queue", symbol: "$", tone: "bg-amber-50 text-amber-700" },
  { label: "Vouchers issued", value: "—", note: "Issued voucher records", symbol: "✓", tone: "bg-emerald-50 text-emerald-700" },
];

const workflow = [
  { number: "01", title: "Review requests", description: "Check customer details and the selected Wi-Fi package." },
  { number: "02", title: "Verify payment", description: "Confirm EcoCash payments against the actual transaction record." },
  { number: "03", title: "Issue voucher", description: "Generate and record a voucher after payment is verified." },
];

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-slate-950 text-white lg:flex">
        <Link href="/" className="flex items-center gap-3 border-b border-white/10 px-6 py-6"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400 font-black text-slate-950">T</span><span><span className="block font-black">TEPs Electronics</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300">Admin workspace</span></span></Link>
        <div className="px-4 py-6"><p className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Workspace</p><div className="mt-3 flex items-center gap-3 rounded-xl bg-sky-400/10 px-3 py-3 text-sm font-bold text-sky-200"><span>▦</span> Overview</div><Link href="/clients" className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"><span>↗</span> Client portal</Link></div>
        <div className="mt-auto border-t border-white/10 p-5"><div className="rounded-xl bg-white/5 p-4"><p className="text-xs font-bold text-slate-300">System status</p><p className="mt-2 flex items-center gap-2 text-xs text-amber-300"><span className="h-2 w-2 rounded-full bg-amber-400" /> Preview mode</p></div><Link href="/" className="mt-4 block text-sm font-semibold text-slate-400 hover:text-white">← Return to website</Link></div>
      </aside>

      <div className="lg:pl-64">
        <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">TEPs Electronics / Workspace</p><h1 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">Administration overview</h1></div><Link href="/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 transition hover:border-sky-300 hover:text-sky-700">View website ↗</Link></div></header>

        <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-7 text-white sm:p-9"><div className="absolute -right-12 -top-24 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" /><div className="relative max-w-2xl"><span className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-sky-200">Staff dashboard</span><h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Manage voucher requests with clarity.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">This workspace is the visual foundation for request review, payment confirmation and voucher issuance. Live records will appear after secure Supabase integration.</p></div><div className="mt-6 flex flex-wrap gap-3"><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">Request management</span><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">Payment review</span><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">Voucher issuance</span></div></motion.section>

          <section className="mt-7 grid gap-4 md:grid-cols-3">{metrics.map((metric, index) => <motion.article key={metric.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 + index * 0.1 }} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"><div className="flex items-start justify-between"><p className="text-sm font-bold text-slate-500">{metric.label}</p><span className={`grid h-10 w-10 place-items-center rounded-xl text-lg font-black ${metric.tone}`}>{metric.symbol}</span></div><p className="mt-5 text-4xl font-black tracking-tight text-slate-900">{metric.value}</p><p className="mt-2 text-xs text-slate-500">{metric.note}</p></motion.article>)}</section>

          <section className="mt-7 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-3"><div><h3 className="text-lg font-black">Request workflow</h3><p className="mt-1 text-sm text-slate-500">The intended operational process</p></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-500">Not live</span></div><div className="mt-6 divide-y divide-slate-100">{workflow.map((item) => <div key={item.number} className="flex gap-4 py-5 first:pt-0 last:pb-0"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm font-black text-slate-600">{item.number}</span><div><h4 className="font-extrabold">{item.title}</h4><p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p></div></div>)}</div></div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7"><span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-xl text-amber-800">!</span><h3 className="mt-4 text-lg font-black text-amber-950">Setup still required</h3><p className="mt-2 text-sm leading-6 text-amber-900">No customer requests or payment records are shown here yet. Before using this page operationally, we must add administrator sign-in, role checks, database access policies and server-side payment verification.</p><Link href="/clients" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800">Preview client portal <span>→</span></Link></div>
          </section>
          <p className="mt-7 text-center text-xs text-slate-400">TEPs Electronics · Voucher administration · Design preview</p>
        </main>
      </div>
    </div>
  );
}