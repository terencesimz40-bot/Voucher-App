import { useState } from "react";

function Header({ page, navigate }) {
  return <header className="topbar">
    <a className="brand" href="/" onClick={e => { e.preventDefault(); navigate("home"); }}>TEPs <span>Electronics</span></a>
    <span className="pill">{page === "admin" ? "Administration" : page === "client" ? "Client portal" : "Vourcher-App"}</span>
  </header>;
}

function Home({ navigate }) {
  return <main className="container">
    <section className="hero"><p className="eyebrow">TEPS ELECTRONICS ZW</p><h1>Wi-Fi vouchers,<br/><span className="accent">made simple.</span></h1>
      <p>Request a Wi-Fi voucher and submit your EcoCash payment reference for staff review.</p>
      <div className="actions"><button className="button" onClick={() => navigate("client")}>Request a voucher</button><button className="button button-secondary" onClick={() => navigate("admin")}>Administration</button></div>
    </section>
    <section className="feature-grid">
      <article className="panel"><span className="feature-icon">01</span><h2>Request</h2><p>Choose your package and provide your contact details.</p></article>
      <article className="panel"><span className="feature-icon">02</span><h2>Pay</h2><p>Pay using the instructions provided by TEPs Electronics.</p></article>
      <article className="panel"><span className="feature-icon">03</span><h2>Confirm</h2><p>Staff review payment and record voucher issuance.</p></article>
    </section>
    <p className="notice">Prototype only: requests, payments and voucher generation are not yet connected to the live backend. Do not submit real payment details here.</p>
    <footer>Contact TEPs Electronics: <strong>0771906932</strong></footer>
  </main>;
}

function ClientPortal({ navigate }) {
  const [message, setMessage] = useState("Demo only: no request is saved and no payment is verified.");
  function submit(e) { e.preventDefault(); setMessage("Prototype only: no request was saved. Backend integration will be added after the database and secure Edge Functions are ready."); }
  return <main className="container"><button className="back-link" onClick={() => navigate("home")}>← Home</button>
    <section className="hero"><p className="eyebrow">CLIENT PORTAL</p><h1>Request your Wi-Fi voucher.</h1><p>Enter your details and preferred package. This form is a visual prototype only.</p></section>
    <section className="panel"><h2>New voucher request</h2><form onSubmit={submit}>
      <label>Full name<input name="customer_name" required maxLength="100" autoComplete="name" placeholder="Your full name"/></label>
      <label>Phone number<input name="phone" required maxLength="30" autoComplete="tel" placeholder="07..."/></label>
      <label>Package / plan<input name="package_name" required maxLength="100" placeholder="e.g. 2-hour Wi-Fi"/></label>
      <label>Amount (USD)<input name="amount" required type="number" min="0.01" step="0.01" placeholder="1.00"/></label>
      <label className="full-width">EcoCash reference (optional)<input name="payment_reference" maxLength="120" placeholder="Enter after payment"/></label>
      <button type="submit">Prepare request</button><p className="notice full-width" role="status">{message}</p>
    </form></section><footer>Need help? Contact TEPs Electronics on <strong>0771906932</strong>.</footer>
  </main>;
}

function AdminPortal({ navigate }) {
  return <main className="container"><button className="back-link" onClick={() => navigate("home")}>← Home</button>
    <section className="hero"><p className="eyebrow">STAFF WORKSPACE</p><h1>Voucher administration</h1><p>Review voucher requests, confirm payments and record voucher issuance.</p></section>
    <section className="panel"><div className="status-row"><span className="status-dot"/> Backend not connected</div><h2>Admin dashboard</h2><p>This dashboard is not active yet. Supabase authentication, admin role checks and server-side policies must be implemented before it can display customer data.</p>
      <div className="grid"><div className="stat"><span>Total requests</span><strong>—</strong></div><div className="stat"><span>Payments to review</span><strong>—</strong></div><div className="stat"><span>Vouchers issued</span><strong>—</strong></div></div>
    </section><footer>TEPs Electronics • Administration tools are not active yet.</footer>
  </main>;
}

export default function App() {
  const [page, setPage] = useState(() => window.location.hash.replace("#", "") || "home");
  function navigate(next) { setPage(next); window.location.hash = next === "home" ? "" : next; window.scrollTo({ top: 0, behavior: "smooth" }); }
  return <><Header page={page} navigate={navigate}/>{page === "client" ? <ClientPortal navigate={navigate}/> : page === "admin" ? <AdminPortal navigate={navigate}/> : <Home navigate={navigate}/>}</>;
}