"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClientPortalPage() {
  const [message, setMessage] = useState("Demo only: no request is saved and no payment is verified.");
  function submit(event) {
    event.preventDefault();
    setMessage("Prototype only: no request was saved. Supabase backend integration is not active yet.");
  }
  return <>
    <header className="topbar"><Link className="brand" href="/">TEPs <span>Electronics</span></Link><span className="pill">Client portal</span></header>
    <main className="container"><Link className="back-link" href="/">← Home</Link>
      <section className="hero"><p className="eyebrow">CLIENT PORTAL</p><h1>Request your Wi-Fi voucher.</h1><p>Enter your details and preferred package. This form is a visual prototype only.</p></section>
      <section className="panel"><h2>New voucher request</h2><form onSubmit={submit}>
        <label>Full name<input name="customer_name" required maxLength={100} autoComplete="name" placeholder="Your full name"/></label>
        <label>Phone number<input name="phone" required maxLength={30} autoComplete="tel" placeholder="07..."/></label>
        <label>Package / plan<input name="package_name" required maxLength={100} placeholder="e.g. 2-hour Wi-Fi"/></label>
        <label>Amount (USD)<input name="amount" required type="number" min="0.01" step="0.01" placeholder="1.00"/></label>
        <label className="full-width">EcoCash reference (optional)<input name="payment_reference" maxLength={120} placeholder="Enter after payment"/></label>
        <button type="submit">Prepare request</button><p className="notice full-width" role="status">{message}</p>
      </form></section><footer>Need help? Contact TEPs Electronics on <strong>0771906932</strong>.</footer>
    </main>
  </>;
}