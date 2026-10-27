import { useState } from "react";
import Link from "next/link";

const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

export default function ClientPortalPage() {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    setMessage("This is a design preview. Your request has not been saved because the Supabase connection is not active yet.");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-lg font-black text-sky-300">T</span><span><span className="block font-black tracking-tight">TEPs Electronics</span><span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Voucher portal</span></span></Link>
          <Link href="/" className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">← Back to home</Link>
        </nav>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:py-14">
        <aside className="relative isolate overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9 lg:p-10">
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <span className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-sky-200">Customer workspace</span>
          <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Your next connection starts here.</h1>
          <p className="mt-5 leading-7 text-slate-300">Complete the request details on this page. The TEPs Electronics team can then review your request and payment once the live system is connected.</p>
          <div className="mt-9 space-y-4">
            {[["01", "Your details", "Tell us who to contact."], ["02", "Package choice", "Select the plan you want."], ["03", "Payment review", "Payment must be checked before a voucher is issued."]].map(([num, title, description]) => <div key={num} className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-black text-sky-200">{num}</span><div><p className="font-bold">{title}</p><p className="mt-1 text-sm leading-6 text-slate-400">{description}</p></div></div>)}
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Need assistance?</p><a href="tel:0771906932" className="mt-2 inline-block text-xl font-black text-sky-300 hover:text-sky-200">0771906932</a><p className="mt-1 text-sm text-slate-400">TEPs Electronics customer support</p></div>
        </aside>

        <section className="self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.25)] sm:p-9">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">Voucher request</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Tell us what you need</h2><p className="mt-2 text-sm leading-6 text-slate-500">Fields marked required must be completed.</p></div><span className="hidden rounded-2xl bg-sky-50 p-3 text-2xl text-sky-700 sm:block">⌁</span></div>
          <form className="mt-8 space-y-5" onSubmit={submit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-slate-700">Full name <span className="text-rose-500">*</span><input className={inputClass + " mt-2"} name="customer_name" required maxLength={100} autoComplete="name" placeholder="e.g. Tendai Moyo" /></label>
              <label className="block text-sm font-bold text-slate-700">Phone number <span className="text-rose-500">*</span><input className={inputClass + " mt-2"} name="phone" required maxLength={30} autoComplete="tel" placeholder="077 123 4567" /></label>
            </div>
            <label className="block text-sm font-bold text-slate-700">Wi-Fi package / plan <span className="text-rose-500">*</span><input className={inputClass + " mt-2"} name="package_name" required maxLength={100} placeholder="Enter the package name" /></label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-slate-700">Amount (USD) <span className="text-rose-500">*</span><div className="relative mt-2"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">$</span><input className={inputClass + " pl-9"} name="amount" required type="number" min="0.01" step="0.01" placeholder="0.00" /></div></label>
              <label className="block text-sm font-bold text-slate-700">EcoCash reference <span className="font-normal text-slate-400">(optional)</span><input className={inputClass + " mt-2"} name="payment_reference" maxLength={120} placeholder="Payment reference, if available" /></label>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><p className="text-sm font-extrabold text-amber-950">Before you submit</p><p className="mt-1 text-sm leading-6 text-amber-900">This page is currently a preview. Do not enter real payment details; submissions are not saved or verified yet.</p></div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200" type="submit">Preview request <span aria-hidden="true">→</span></button>
            {message && <p className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-6 text-sky-950" role="status">{message}</p>}
          </form>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:px-8 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} TEPs Electronics</span><span>Secure payment review will be enabled after backend setup.</span></div></footer>
    </div>
  );
}