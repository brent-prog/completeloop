"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, Gauge, Menu, Repeat2, SearchCheck, ShieldCheck, X } from "lucide-react";

const cta = "https://calendly.com/brent3p/30min";

const painPoints = [
  "Managers coach the same issues over and over, but leadership only sees the final numbers.",
  "Follow-up is inconsistent, so behaviour change is assumed instead of verified.",
  "Training gaps, unclear standards, and broken processes stay hidden inside one-off coaching conversations.",
  "KMS and LMS content gets updated too late, if it gets updated at all.",
];

const workflow = [
  ["Observe", "Capture the specific behaviour, not vague impressions or lagging results."],
  ["Coach", "Document the Continue, Stop, or Start action that was discussed."],
  ["Follow up", "Set a clear date to check whether the behaviour actually changed."],
  ["Verify", "Confirm the outcome and identify whether the issue repeated."],
  ["Recognize", "Close the loop with specific praise when improvement is seen."],
];

const signals = [
  "Repeated coaching theme",
  "Behaviour change verified or not verified",
  "Training or knowledge gap",
  "Unclear standard or process issue",
  "Manager follow-up completion",
  "Location, team, or role pattern",
];

const dashboardCards = [
  [Gauge, "Coaching completion", "See whether managers are closing the loop, not just starting conversations."],
  [SearchCheck, "Verified change", "Track whether behaviour changed after coaching and where it did not stick."],
  [Repeat2, "Repeat themes", "Find the same coaching issues across teams, locations, programs, and roles."],
  [FileText, "KMS and LMS signals", "Identify the standards, SOPs, or training content that need attention next."],
] as const;

const pilotItems = [
  "Simple manager coaching documentation workflow",
  "Employee, team, location, and issue tagging",
  "Follow-up reminders and completion tracking",
  "Behaviour change verification",
  "Repeat coaching theme reporting",
  "Knowledge, training, process, and accountability gap flags",
];

const fitCards = [
  ["3P Solutions", "Finds alignment, process, performance, and knowledge gaps through consulting and operational analysis."],
  ["AlignRise", "Helps teams implement an aligned business operating system when the issue is broader than coaching alone."],
  ["CompleteLoop", "Turns ongoing coaching documentation into the operational signal that keeps gaps visible after the assessment ends."],
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Repeat2 className="h-6 w-6" />
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-slate-950">CompleteLoop</p>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Coaching Signal Platform</p>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">{children}</p>;
}

function HeaderBlock({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Label>{label}</Label>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ["problem", "product", "signal", "pilot", "about"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="CompleteLoop home"><Logo /></a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 md:flex" aria-label="Main navigation">
            {nav.map((item) => <a key={item} href={`#${item}`} className="capitalize hover:text-cyan-700">{item === "about" ? "3P Backing" : item}</a>)}
          </nav>
          <a href={cta} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-black text-white hover:bg-cyan-700 sm:inline-flex">Book a pilot call <ArrowRight className="h-4 w-4" /></a>
          <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden">
            <div className="grid gap-2 text-base font-bold text-slate-800">
              {nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 capitalize hover:bg-cyan-50 hover:text-cyan-700">{item}</a>)}
              <a href={cta} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-white">Book a pilot call <ArrowRight className="h-4 w-4" /></a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-800"><ClipboardCheck className="h-4 w-4" />Coaching Documentation as Operational Signal</div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">Turn frontline coaching into the signal that shows why problems keep repeating.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">CompleteLoop helps managers document coaching, verify behaviour change, and reveal the training, process, knowledge, and accountability gaps behind recurring execution issues.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={cta} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-black text-white hover:bg-slate-800">Book a pilot call <ArrowRight className="h-5 w-5" /></a>
              <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-black text-slate-900 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-800">See how the loop works</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Manager coaching record</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Observed behaviour</p><p className="mt-2 font-semibold">Agent skipped the identity verification step on 3 of 5 reviewed calls.</p></div>
                <div className="grid gap-4 sm:grid-cols-3">{["Coach", "Follow up", "Verify"].map((step) => <div key={step} className="rounded-2xl bg-cyan-400/15 p-4 text-center font-black text-cyan-100">{step}</div>)}</div>
                <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Signal created</p><p className="mt-2 text-sm leading-6 text-slate-100">Repeat issue across 2 teams. Possible training refresh and SOP clarity gap.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><HeaderBlock label="The problem" title="Your managers are coaching. The organization is not learning." text="Coaching conversations happen every day, but most of the evidence disappears. Leaders see quality scores, complaints, turnover, and missed KPIs. They rarely see the coaching patterns that explain them." /><div className="mt-12 grid gap-5 md:grid-cols-2">{painPoints.map((point) => <div key={point} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><CheckCircle2 className="h-6 w-6 text-cyan-700" /><p className="mt-4 text-lg font-bold leading-7 text-slate-800">{point}</p></div>)}</div></div></section>

      <section id="product" className="bg-white px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><HeaderBlock label="The MVP" title="A simple coaching workflow that makes behaviour change visible." text="CompleteLoop is built for the manager first. Document the coaching in minutes, follow up on time, verify what changed, and close the loop with recognition." /><div className="mt-14 grid gap-5 lg:grid-cols-5">{workflow.map(([title, text], index) => <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">{index + 1}</div><h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-700">{text}</p></div>)}</div></div></section>

      <section id="signal" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><HeaderBlock label="The signal layer" title="Every completed coaching loop creates operational evidence." text="CompleteLoop does not start by replacing your KMS, LMS, HRIS, or dashboards. It gives those systems a better input: verified coaching outcomes from the people closest to the work." /><div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-[2rem] bg-slate-950 p-8 text-white"><Label>Signals created</Label><div className="mt-8 space-y-4">{signals.map((signal) => <div key={signal} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" /><p className="font-bold text-slate-100">{signal}</p></div>)}</div></div><div className="grid gap-5 sm:grid-cols-2">{dashboardCards.map(([Icon, title, text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><Icon className="h-7 w-7 text-cyan-700" /><h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-700">{text}</p></div>)}</div></div></div></section>

      <section id="pilot" className="bg-white px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><Label>Pilot offer</Label><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Start with one team, one location, or one recurring issue.</h2><p className="mt-5 text-lg leading-8 text-slate-700">The first pilot should prove one thing: coaching documentation can show where repeat execution problems are really coming from.</p><a href={cta} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-base font-black text-white hover:bg-cyan-700">Discuss a pilot <ArrowRight className="h-5 w-5" /></a></div><div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"><div className="grid gap-4">{pilotItems.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" /><p className="font-bold leading-7 text-slate-800">{feature}</p></div>)}</div></div></div></section>

      <section id="about" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><HeaderBlock label="Where it fits" title="CompleteLoop is the coaching signal layer, backed by 3P operating discipline." text="3P Solutions can diagnose alignment and knowledge gaps. AlignRise can help implement a stronger business operating system. CompleteLoop keeps the learning loop alive by turning ongoing coaching into evidence." /><div className="mt-12 grid gap-5 md:grid-cols-3">{fitCards.map(([title, text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-2xl font-black text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-700">{text}</p></div>)}</div><div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-center text-white md:p-12"><p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">Core belief</p><p className="mx-auto mt-4 max-w-3xl text-2xl font-black leading-tight md:text-4xl">If coaching happens but knowledge does not improve, the loop is not complete.</p></div></div></section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><Logo /><p className="text-sm font-semibold text-slate-600">CompleteLoop turns coaching documentation into operational signal.</p></div></footer>
    </main>
  );
}
