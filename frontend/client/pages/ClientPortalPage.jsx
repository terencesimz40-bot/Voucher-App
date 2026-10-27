import { useState } from "react";
import Link from "next/link";

export default function ClientPortalPage() {
  const [message, setMessage] = useState("Demo only: no request is saved and no payment is verified.");
  function submit(event) {
    event.preventDefault();
    setMessage("Prototype only: no request was saved. Supabase backend integration is not active yet.");
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white sm:px-8">
        <Link className="text-lg font-extrabold tracking-tight" href="/">TEPs <span className="text-sky-300">Electronics</span></Link>
        <span className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">Client portal</span>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <Link className="text-sm font-bold text-sky-700 hover:text-sky-900" href="/">← Home</Link>
        <section className="py-9">
          <p className="text-xs font-extrabold tracking-[0.22em] text-sky-700">CLIENT PORTAL</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Request your Wi-Fi voucher.</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Enter your details and preferred package. This form is a visual prototype only.</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-extrabold text-slate-900">New voucher request</h2>
          <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={submit}>
            <label className="grid gap-2 text-sm font-bold text-slate-700">Full name<input className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" name="customer_name" required maxLength={100} autoComplete="name" placeholder="Your full name" /></label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">Phone number<input className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" name="phone" required maxLength={30} autoComplete="tel" placeholder="07..." /></label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">Package / plan<input className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" name="package_name" required maxLength={100} placeholder="e.g. 2-hour Wi-Fi" /></label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">Amount (USD)<input className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" name="amount" required type="number" min="0.01" step="0.01" placeholder="1.00" /></label>
            <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">EcoCash reference (optional)<input className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" name="payment_reference" maxLength={120} placeholder="Enter after payment" /></label>
            <button className="rounded-lg bg-sky-700 px-5 py-3.5 font-extrabold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200 sm:col-span-2" type="submit">Prepare request</button>
            <p className="rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-900 sm:col-span-2" role="status">{message}</p>
          </form>
        </section>
        <footer className="mt-8 text-sm text-slate-500">Need help? Contact TEPs Electronics on <strong className="text-slate-700">0771906932</strong>.</footer>
      </main>
    </div>
  );
}