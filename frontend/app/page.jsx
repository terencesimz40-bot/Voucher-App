import Link from "next/link";

export default function HomePage() {
  return <>
    <header className="topbar"><Link className="brand" href="/">TEPs <span>Electronics</span></Link><span className="pill">Vourcher-App</span></header>
    <main className="container">
      <section className="hero"><p className="eyebrow">TEPS ELECTRONICS ZW</p><h1>Wi-Fi vouchers,<br/><span className="accent">made simple.</span></h1><p>Request a Wi-Fi voucher and submit your EcoCash payment reference for staff review.</p>
        <div className="actions"><Link className="button" href="/clients">Request a voucher</Link><Link className="button button-secondary" href="/administration">Administration</Link></div>
      </section>
      <section className="feature-grid">
        <article className="panel"><span className="feature-icon">01</span><h2>Request</h2><p>Choose your package and provide your contact details.</p></article>
        <article className="panel"><span className="feature-icon">02</span><h2>Pay</h2><p>Pay using the instructions provided by TEPs Electronics.</p></article>
        <article className="panel"><span className="feature-icon">03</span><h2>Confirm</h2><p>Staff review payment and record voucher issuance.</p></article>
      </section>
      <p className="notice">Prototype only: requests, payments and voucher generation are not yet connected to the live backend. Do not submit real payment details here.</p>
      <footer>Contact TEPs Electronics: <strong>0771906932</strong></footer>
    </main>
  </>;
}