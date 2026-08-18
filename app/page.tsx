'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Building2, FileText, Gavel, Landmark, Menu, MessageSquareText, Newspaper, Scale, ShieldCheck, Users, X } from 'lucide-react';
import { useState } from 'react';

const business = [
  ['Next Sitting', 'Tuesday • 10:00 AM', 'House Chamber'],
  ['Order Paper', 'Agenda & Orders of the Day', 'View document'],
  ['Hansard', 'Official record of proceedings', 'Read latest'],
];
const services = [
  { icon: BookOpen, title:'Know Your Rights', text:'Understand your rights in clear, youth-friendly language.', href:'#rights' },
  { icon: Users, title:'Meet the Assembly', text:'Explore leadership, representatives and committees.', href:'#assembly' },
  { icon: Gavel, title:'Bills & Motions', text:'Follow proposals, debates and decisions that affect young people.', href:'#business' },
  { icon: MessageSquareText, title:'Petitions & Participation', text:'Have your voice heard through structured public participation.', href:'#participate' },
];
const news = [
  ['ASSEMBLY', 'Youth voices take centre stage in national dialogue', '12 Aug 2026'],
  ['COMMITTEES', 'Children’s welfare committee begins stakeholder consultations', '08 Aug 2026'],
  ['EDUCATION', 'New rights education resources launched for schools', '02 Aug 2026'],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="bg-[#b4202a] text-white text-xs font-bold py-2"><div className="container flex justify-between gap-4"><span>KENYA CHILDREN ASSEMBLY</span><span className="hidden sm:block">Sauti Yako • Haki Yako • Mustakabali Wetu</span></div></div>
    <header className="bg-[#071b34] sticky top-0 z-50 border-b border-white/10">
      <div className="container h-[76px] flex items-center justify-between gap-8">
        <a href="#top" className="flex items-center gap-3 text-white"><span className="grid place-items-center w-12 h-12 rounded-full border-2 border-[#d6a43a] text-[#d6a43a]"><Landmark size={24}/></span><span><strong className="display block text-xl">Kenya Children</strong><small className="text-[#d6a43a] font-bold tracking-[.18em] uppercase">Assembly</small></span></a>
        <nav className="hidden lg:flex items-center gap-6"><a className="nav-link" href="#assembly">Assembly</a><a className="nav-link" href="#business">House Business</a><a className="nav-link" href="#rights">Rights</a><a className="nav-link" href="#news">News</a><a className="nav-link" href="#participate">Get Involved</a></nav>
        <button aria-label="Toggle navigation" onClick={()=>setOpen(!open)} className="lg:hidden text-white p-2">{open?<X/>:<Menu/>}</button>
        <a href="#participate" className="hidden sm:inline-flex items-center gap-2 bg-[#d6a43a] text-[#071b34] px-4 py-2.5 font-extrabold text-sm">Have Your Say <ArrowRight size={16}/></a>
      </div>
      {open && <div className="lg:hidden bg-[#0b294b] border-t border-white/10 p-5 space-y-4"><a className="block nav-link" href="#assembly">Assembly</a><a className="block nav-link" href="#business">House Business</a><a className="block nav-link" href="#rights">Rights</a><a className="block nav-link" href="#news">News</a><a className="block nav-link" href="#participate">Get Involved</a></div>}
    </header>

    <main id="top">
      <section className="bg-[#071b34] text-white overflow-hidden"><div className="container grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center py-20 lg:py-28">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}><div className="eyebrow text-[#f1c765]">The voice of Kenya's children</div><h1 className="display text-5xl sm:text-6xl lg:text-7xl font-bold mt-5 leading-[.98]">A Parliament<br/><span className="text-[#d6a43a]">for every child.</span></h1><p className="text-lg text-[#c8d5e4] max-w-2xl mt-7 leading-8">The Kenya Children Assembly brings young people together to learn their rights, participate in civic life and shape conversations about the future of Kenya.</p><div className="flex flex-wrap gap-3 mt-8"><a href="#assembly" className="inline-flex items-center gap-2 bg-[#d6a43a] text-[#071b34] px-6 py-3 font-extrabold">Explore the Assembly <ArrowRight size={18}/></a><a href="#rights" className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 font-bold">Know Your Rights</a></div></motion.div>
        <div className="relative"><div className="absolute -inset-6 bg-[#d6a43a]/10 blur-3xl rounded-full"/><div className="relative paper p-7 text-[#172033]"><div className="flex justify-between items-start border-b pb-5"><div><div className="eyebrow">Official Notice</div><h2 className="display text-3xl font-bold mt-2">House at a glance</h2></div><Scale className="text-[#b4202a]"/></div><div className="grid grid-cols-2 gap-5 py-6"><div><strong className="display text-4xl">47</strong><p className="text-sm text-slate-600">County voices</p></div><div><strong className="display text-4xl">1</strong><p className="text-sm text-slate-600">National youth platform</p></div><div><strong className="display text-4xl">53</strong><p className="text-sm text-slate-600">Constitutional rights focus</p></div><div><strong className="display text-4xl">∞</strong><p className="text-sm text-slate-600">Ideas worth hearing</p></div></div><div className="bg-[#f7f4ed] p-4 text-sm font-bold">Next sitting: <span className="text-[#b4202a]">Tuesday, 10:00 AM</span></div></div></div>
      </div></section>

      <section id="business" className="bg-white border-b"><div className="container py-12"><div className="flex items-end justify-between gap-6 mb-7"><div><div className="eyebrow">House Business</div><h2 className="display text-4xl font-bold mt-2">What is happening in the House?</h2></div><a className="hidden sm:flex items-center gap-2 font-bold text-[#b4202a]" href="#">View all business <ArrowRight size={16}/></a></div><div className="grid md:grid-cols-3 gap-4">{business.map(([a,b,c])=><div className="card p-6" key={a}><div className="flex justify-between"><FileText className="text-[#b4202a]"/><span className="text-xs font-bold uppercase text-slate-500">{c}</span></div><h3 className="display text-2xl font-bold mt-8">{a}</h3><p className="text-slate-600 mt-2">{b}</p><a href="#" className="inline-flex items-center gap-2 mt-5 text-sm font-extrabold">Open <ArrowRight size={15}/></a></div>)}</div></div></section>

      <section id="assembly" className="py-20"><div className="container"><div className="max-w-3xl"><div className="eyebrow">The Assembly</div><h2 className="display text-4xl sm:text-5xl font-bold mt-3">A national platform for participation.</h2><div className="gold-rule my-6"/><p className="text-lg leading-8 text-slate-600">Built around representation, leadership, debate and accountability, the Assembly gives children and young people a structured space to understand public institutions and contribute to national conversations.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{services.map(({icon:Icon,title,text,href})=><a href={href} className="card p-6" key={title}><Icon className="text-[#b4202a]" size={27}/><h3 className="font-extrabold text-lg mt-6">{title}</h3><p className="text-sm leading-6 text-slate-600 mt-2">{text}</p><ArrowRight className="mt-6" size={18}/></a>)}</div></div></section>

      <section id="rights" className="bg-[#071b34] text-white py-20"><div className="container grid lg:grid-cols-[.85fr_1.15fr] gap-14 items-center"><div><div className="eyebrow text-[#f1c765]">Rights & Constitution</div><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Know your rights. Use your voice.</h2><p className="text-[#c8d5e4] leading-7 mt-5">Our rights library turns complex civic information into practical, age-appropriate learning. Start with Article 53 and explore protection, education, participation and access to essential services.</p><a href="#" className="inline-flex items-center gap-2 bg-white text-[#071b34] px-5 py-3 mt-7 font-extrabold">Open Rights Library <BookOpen size={17}/></a></div><div className="grid sm:grid-cols-2 gap-4">{['Right to education','Best interests of the child','Protection from harmful practices','Right to parental care','Child-friendly justice','Participation & expression'].map((x,i)=><div key={x} className="border border-white/10 bg-white/5 p-5"><span className="text-[#d6a43a] font-bold">0{i+1}</span><h3 className="font-bold mt-4">{x}</h3></div>)}</div></div></section>

      <section id="news" className="py-20"><div className="container"><div className="eyebrow">Latest from the Assembly</div><div className="flex flex-wrap justify-between gap-5 items-end"><h2 className="display text-4xl font-bold mt-2">News & Updates</h2><a href="#" className="font-bold text-[#b4202a] inline-flex items-center gap-2">All news <ArrowRight size={16}/></a></div><div className="grid md:grid-cols-3 gap-5 mt-9">{news.map(([tag,title,date])=><article className="paper p-6" key={title}><span className="text-xs font-extrabold text-[#b4202a]">{tag}</span><h3 className="display text-2xl font-bold mt-8 leading-tight">{title}</h3><p className="text-sm text-slate-500 mt-7">{date}</p><a href="#" className="inline-flex mt-5 items-center gap-2 font-bold text-sm">Read story <ArrowRight size={15}/></a></article>)}</div></div></section>

      <section id="participate" className="bg-[#f0e8d8] py-16"><div className="container"><div className="paper p-8 sm:p-12 grid lg:grid-cols-[1fr_auto] gap-10 items-center"><div><div className="eyebrow">Public Participation</div><h2 className="display text-4xl font-bold mt-2">Your voice belongs in the conversation.</h2><p className="text-slate-600 mt-4 max-w-2xl leading-7">Submit an idea, follow a petition, participate in consultations or learn how parliamentary processes work.</p></div><div className="flex flex-wrap gap-3"><a href="#" className="bg-[#b4202a] text-white px-5 py-3 font-extrabold">Submit a Petition</a><a href="#" className="border border-[#071b34] px-5 py-3 font-extrabold">Get Involved</a></div></div></div></section>
    </main>

    <footer className="bg-[#071b34] text-white"><div className="container py-14 grid md:grid-cols-3 gap-12"><div><div className="flex items-center gap-3"><Landmark className="text-[#d6a43a]"/><span className="display text-2xl font-bold">Kenya Children Assembly</span></div><p className="text-[#9fb1c7] mt-5 leading-7">Sauti Yako, Haki Yako — a digital civic platform for children's participation, rights education and leadership.</p></div><div><h3 className="font-bold">Explore</h3><div className="mt-4 grid gap-3 text-sm text-[#c8d5e4]"><a href="#assembly">The Assembly</a><a href="#business">House Business</a><a href="#rights">Rights Library</a><a href="#news">News & Events</a></div></div><div><h3 className="font-bold">Safety & Trust</h3><p className="text-sm text-[#9fb1c7] mt-4 leading-6 flex gap-2"><ShieldCheck size={18} className="shrink-0 text-[#d6a43a]"/> Sensitive reports require secure backend processing, strict access controls and professional child-protection procedures.</p></div></div><div className="border-t border-white/10"><div className="container py-5 text-xs text-[#8094ad] flex flex-wrap justify-between gap-3"><span>© 2026 Kenya Children Assembly</span><span>Built for participation • Designed for accessibility</span></div></div></footer>
  </>;
}
