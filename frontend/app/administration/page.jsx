import Link from "next/link";

export default function AdministrationPage() {
  return <>
    <header className="topbar"><Link className="brand" href="/">TEPs <span>Electronics</span></Link><span className="pill">Administration</span></header>
    <main className="container"><Link className="back-link" href="/">← Home</Link>
      <section className="hero"><p className="eyebrow">STAFF WORKSPACE</p><h1>Voucher administration</h1><p>Review voucher requests, confirm payments and record voucher issuance.</p></section>
      <section className="panel"><div className="status-row"><span className="status-dot"/> Backend not connected</div><h2>Admin dashboard</h2><p>This dashboard is not active yet. Supabase authentication, admin role checks and server-side policies must be implemented before it can display customer data.</p>
        <div className="grid"><div className="stat"><span>Total requests</span><strong>—</strong></div><div className="stat"><span>Payments to review</span><strong>—</strong></div><div className="stat"><span>Vouchers issued</span><strong>—</strong></div></div>
      </section><footer>TEPs Electronics • Administration tools are not active yet.</footer>
    </main>
  </>;
}