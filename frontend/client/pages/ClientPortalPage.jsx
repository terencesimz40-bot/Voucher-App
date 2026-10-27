import { useState } from "react";
import Link from "next/link";

const fieldClass = "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

export default function ClientPortalPage() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    package_name: "",
    amount: "",
    payment_reference: "",
    notes: "",
  });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setMessage("");
  }

  function submit(event) {
    event.preventDefault();
    setMessage("Design preview only: this request has not been sent or saved yet. The backend connection must be enabled before real requests can be processed.");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-lg font-black text-sky-300">T</span>
            <span><span className="block font-extrabold tracking-tight">TEPs Electronics</span><span className="block text-xs text-slate-500">Wi-Fi voucher request</span></span>
          </Link>
          <Link href="/" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">Home</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-7 text-center">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">Customer portal</span>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Request your Wi-Fi voucher</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Enter your contact details and package. TEPs Electronics will review your request and payment before issuing a voucher.</p>
          </div>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-xl text-sky-700">⌁</span>
              <div><h2 className="font-extrabold">Request details</h2><p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p></div>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-slate-700">Full name <span className="text-rose-600">*</span>
                  <input className={fieldClass} name="customer_name" value={form.customer_name} onChange={updateField} required maxLength={100} autoComplete="name" placeholder="Enter your full name" />
                </label>
                <label className="block text-sm font-bold text-slate-700">Phone number <span className="text-rose-600">*</span>
                  <input className={fieldClass} name="phone" value={form.phone} onChange={updateField} required maxLength={30} autoComplete="tel" inputMode="tel" placeholder="e.g. 077 123 4567" />
                </label>
              </div>

              <label className="block text-sm font-bold text-slate-700">Wi-Fi package <span className="text-rose-600">*</span>
                <input className={fieldClass} name="package_name" value={form.package_name} onChange={updateField} required maxLength={100} placeholder="Enter the package you want" />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-slate-700">Amount to pay (USD) <span className="text-rose-600">*</span>
                  <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span><input className={fieldClass + " pl-8"} name="amount" value={form.amount} onChange={updateField} required type="number" min="0.01" step="0.01" placeholder="0.00" /></div>
                </label>
                <label className="block text-sm font-bold text-slate-700">EcoCash payment reference <span className="font-normal text-slate-400">(optional)</span>
                  <input className={fieldClass} name="payment_reference" value={form.payment_reference} onChange={updateField} maxLength={120} placeholder="Reference number, if paid" />
                </label>
              </div>

              <label className="block text-sm font-bold text-slate-700">Additional information <span className="font-normal text-slate-400">(optional)</span>
                <textarea className={fieldClass + " min-h-24 resize-y"} name="notes" value={form.notes} onChange={updateField} maxLength={500} placeholder="Anything we should know about your request?" />
              </label>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-bold text-amber-950">Please note</p>
                <p className="mt-1 text-sm leading-6 text-amber-900">This page is currently a visual prototype. Your details will not be saved, payment will not be checked, and no voucher will be issued from this form yet.</p>
              </div>

              <button type="submit" className="flex w-full items-center justify-center rounded-xl bg-sky-600 px-5 py-3.5 font-extrabold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200">Preview request <span className="ml-2" aria-hidden="true">→</span></button>
              {message && <p role="status" className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-6 text-sky-950">{message}</p>}
            </form>
          </section>

          <div className="mt-5 flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
            <span>Need help? <a href="tel:0771906932" className="font-bold text-sky-700 hover:underline">0771906932</a></span>
            <span>TEPs Electronics · Zimbabwe</span>
          </div>
        </div>
      </div>
    </main>
  );
}
