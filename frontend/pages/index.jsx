import Link from "next/link";
import { motion } from "motion/react";

const blogPosts = [
  {
    category: "Wi-Fi Tips",
    readTime: "4 min read",
    title: "5 ways to improve your home Wi-Fi signal",
    excerpt: "Simple placement and setup changes that can help reduce dead zones and make your connection more reliable.",
    date: "Wi-Fi guide",
    icon: "⌁",
  },
  {
    category: "Networking",
    readTime: "5 min read",
    title: "What is a Wi-Fi extender and when do you need one?",
    excerpt: "Learn how an extender can help reach rooms, offices and outdoor areas that your router struggles to cover.",
    date: "Networking basics",
    icon: "↗",
  },
  {
    category: "Hotspot Help",
    readTime: "3 min read",
    title: "How Wi-Fi vouchers work",
    excerpt: "A quick guide to requesting a voucher, submitting payment details safely and waiting for payment confirmation.",
    date: "Customer guide",
    icon: "✓",
  },
];

const steps = [
  { number: "01", title: "Choose your package", text: "Tell us which Wi-Fi plan you need." },
  { number: "02", title: "Make your payment", text: "Pay using the payment method provided." },
  { number: "03", title: "Get connected", text: "Your voucher is issued after payment review." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="relative z-10 border-b border-white/10 bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-400 text-xl font-black text-slate-950 shadow-lg shadow-sky-500/20">T</span>
            <span className="min-w-0"><span className="block truncate text-base font-black tracking-tight sm:text-lg">TEPs Electronics</span><span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs">Wi-Fi voucher portal</span></span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3"><a href="#blog" className="rounded-xl px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:text-sky-200">Blog</a><a href="tel:0771906932" className="hidden rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-slate-200 transition hover:border-sky-300 hover:text-sky-200 sm:inline-flex">Call support</a></div>
          <a href="tel:0771906932" aria-label="Call TEPs Electronics support" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 text-sky-200 sm:hidden">☎</a>
        </nav>
      </header>

      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute -right-40 -top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl sm:h-[34rem] sm:w-[34rem]" /><div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" /></div>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sky-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Easy Wi-Fi access</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Good Wi-Fi.<span className="block text-sky-300">No complications.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Request your Wi-Fi voucher with TEPs Electronics. Simple steps, clear communication, and support when you need it.</p>
           
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Simple request process</span><span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Customer support available</span></div>
          </motion.div>

          <motion.div className="mx-auto w-full max-w-lg" initial={{ opacity: 0, y: 32, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Quick start</p><h2 className="mt-2 text-xl font-black sm:text-2xl">Get connected in 3 steps</h2></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-400/10 text-2xl text-sky-200">⌁</span></div>
              <div className="mt-2 divide-y divide-white/10">{steps.map((step, index) => <motion.div key={step.number} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.35 + index * 0.12 }} className="flex gap-4 py-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sm font-black text-sky-200">{step.number}</span><div><h3 className="font-extrabold">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{step.text}</p></div></motion.div>)}</div>
              <Link href="/clients" className="mt-2 flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-300/30">Get Started <span className="ml-2">↗</span></Link>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">Voucher issuance follows payment review. Do not share your payment PIN.</p>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="blog" className="border-t border-white/10 bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, ease: "easeOut" }} className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-200">TEPs Electronics Blog</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Better Wi-Fi starts with good advice.</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">Helpful guides on Wi-Fi coverage, networking equipment and using your hotspot vouchers.</p>
            </div>
            <a href="tel:0771906932" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-sky-300/40 hover:bg-white/5">Ask our team <span className="ml-2">↗</span></a>
          </motion.div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article key={post.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }} whileHover={{ y: -5 }} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-300/30 hover:bg-white/[0.06] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-sky-300/10 px-3 py-1.5 text-xs font-bold text-sky-200">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <span className="mt-6 grid h-12 w-12 place-items-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-2xl text-sky-200 transition group-hover:scale-105">{post.icon}</span>
                <h3 className="mt-5 text-xl font-extrabold leading-snug tracking-tight">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span className="font-bold text-sky-200">Coming soon</span>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">These article cards are a homepage preview. Full articles and blog management have not been connected yet.</p>
        </div>
      </section>
\n      <section className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div><p className="text-sm font-extrabold">Need help with your request?</p><p className="mt-1 text-sm text-slate-400">Contact TEPs Electronics customer support.</p></div>
          <a href="tel:0771906932" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 px-5 py-3 text-sm font-extrabold text-sky-200 transition hover:bg-sky-300/15">☎ <span className="ml-2">0771906932</span></a>
        </div>
      </section>
      <footer className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} TEPs Electronics · Wi-Fi voucher portal</footer>
    </main>
  );
}
