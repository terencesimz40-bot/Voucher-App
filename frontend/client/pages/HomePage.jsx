import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a", fontFamily: "Arial, sans-serif", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <section style={{ width: "100%", maxWidth: "520px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px", textAlign: "center", boxSizing: "border-box" }}>
        <p style={{ margin: "0 0 12px", color: "#0284c7", fontWeight: 700, letterSpacing: "1px", fontSize: "13px" }}>TEPs ELECTRONICS</p>
        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(30px, 7vw, 42px)", lineHeight: 1.1 }}>Good Wi-Fi. No complications.</h1>
        <p style={{ margin: "0 auto 24px", maxWidth: "380px", color: "#475569", lineHeight: 1.6 }}>Request your Wi-Fi voucher quickly and easily.</p>
        <Link href="/clients" style={{ display: "block", padding: "14px 18px", borderRadius: "10px", background: "#0284c7", color: "#ffffff", textDecoration: "none", fontWeight: 700 }}>Request a Wi-Fi voucher</Link>
        <p style={{ margin: "22px 0 6px", color: "#64748b", fontSize: "14px" }}>Need help?</p>
        <a href="tel:0771906932" style={{ color: "#0369a1", fontWeight: 700, textDecoration: "none" }}>Call 0771906932</a>
      </section>
    </main>
  );
}
