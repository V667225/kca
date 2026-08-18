"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Rights", "#rights"],
  ["Assembly", "#assembly"],
  ["Resources", "#resources"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid size-11 place-items-center rounded-xl bg-[var(--green)] text-xl font-black text-white shadow-lg">K</div>
          <div className="leading-tight"><div className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--red)]">Kenya</div><div className="font-extrabold">Children Assembly</div></div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-[var(--green)]">{label}</Link>)}
          <Link href="#report" className="rounded-full bg-[var(--red)] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5">Speak Up</Link>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-xl p-2 md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t bg-white px-4 pb-5 pt-3 md:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold">{label}</Link>)}<Link href="#report" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[var(--red)] px-3 py-3 text-center font-bold text-white">Speak Up</Link></nav>}
    </header>
  );
}
