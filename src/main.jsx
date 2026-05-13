import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const fullLogo = '/logo.svg';
const faviconLogo = '/favicon.svg';

const loopSteps = [
  'Knowledge exists',
  'Work happens',
  'Coaching observes reality',
  'Behavior change is verified',
  'Recognition reinforces progress',
  'Patterns reveal knowledge gaps',
  'Knowledge and training improve'
];

const proofMetrics = [
  ['80%+', 'Coaching completion target'],
  ['70%+', 'Behavior verification target'],
  ['30%', 'Repeat coaching reduction target'],
  ['30 days', 'Time to first knowledge gap']
];

const audiences = [
  ['O', 'For Operators', 'See why the same problems repeat across locations, teams, and managers.'],
  ['M', 'For Managers', 'Make coaching faster, clearer, and tied to real employee development.'],
  ['AI', 'For AI and Automation', 'Feed systems with verified operational knowledge, not outdated assumptions.']
];

const aboutPoints = [
  ['3P foundation', 'CompleteLoop is built from the 3P view of business: People, Product, and Profit supported by practical leadership, management, and coaching systems.'],
  ['PRAISE methodology', 'The coaching model is based on preparing well, presenting clear behavior-based feedback, verifying change, and recognizing progress.'],
  ['Operator-built', 'The system comes from real multi-location operations experience, not theory. It is designed for managers who need simple tools that help people improve.'],
  ['Knowledge improvement', 'The goal is not more paperwork. The goal is better knowledge, better training, better execution, and fewer repeated problems.']
];

function Button({ children, variant = 'primary', href = '#contact' }) {
  const styles = variant === 'secondary'
    ? 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
    : 'bg-[#12c9bf] text-slate-950 hover:bg-[#3ee0d7]';
  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold transition ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl ${className}`}>{children}</div>;
}

function IconBadge({ children, className = '' }) {
  return <div className={`flex items-center justify-center rounded-2xl font-bold ${className}`}>{children}</div>;
}

function ArrowIcon() {
  return <span className="ml-2 text-lg leading-none">→</span>;
}

function CompleteLoopLandingPage() {
  return (
    <main className="min-h-screen bg-[#183d54] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,201,191,0.24),transparent_36%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#183d54]/95 px-6 py-4 backdrop-blur lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <a href="#" className="flex items-center gap-3">
                <img src={fullLogo} alt="CompleteLoop" className="h-12 w-auto" />
              </a>
              <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                <a href="#problem" className="hover:text-white">Problem</a>
                <a href="#audit" className="hover:text-white">Audit</a>
                <a href="#solution" className="hover:text-white">Solution</a>
                <a href="#loop" className="hover:text-white">The Loop</a>
                <a href="#about" className="hover:text-white">About</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
              <a href="#contact" className="rounded-2xl bg-white px-5 py-3 font-semibold text-[#183d54] transition hover:bg-slate-200">Book a Demo</a>
            </div>
          </nav>

          <div className="grid gap-12 pb-24 pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-32 lg:pt-44">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <img src={faviconLogo} alt="" className="h-5 w-5 rounded-sm bg-white" />
                Systemize. Verify. Improve.
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Stop scaling the same mistakes.</h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">CompleteLoop helps multi-location service businesses keep knowledge, training, and execution aligned by using verified coaching outcomes as the source of truth.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#audit">Start with a Knowledge Check Audit <ArrowIcon /></Button>
                <Button href="#loop" variant="secondary">See how the loop works</Button>
              </div>
              <p className="mt-6 text-sm text-slate-400">Built for healthcare chains, service franchises, regional retail, professional services, and other execution-heavy service businesses.</p>
            </div>

            <div>
              <Card className="border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur md:p-8 rounded-[2rem]">
                <div className="rounded-3xl bg-[#102f43]/90 p-6 text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <div className="text-sm text-slate-300">Operational Signal</div>
                      <div className="text-2xl font-semibold text-white">Knowledge Gap Detected</div>
                    </div>
                    <IconBadge className="h-10 w-10 border border-[#12c9bf]/40 text-[#12c9bf]">✓</IconBadge>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      ['Repeated coaching topic', 'Customer handoff errors'],
                      ['Locations affected', '7 of 18'],
                      ['Root signal', 'Training step missing'],
                      ['Recommended action', 'Update SOP and refresher module']
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3">
                        <span className="text-sm text-slate-300">{label}</span>
                        <span className="text-right font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#12c9bf]">The problem</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Your business does not have a documentation problem. It has a truth problem.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">Knowledge bases go stale. Training teaches old standards. Managers coach differently. Problems repeat across teams and locations because nobody verifies whether behavior actually changed, or whether the knowledge behind the work was wrong in the first place.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ['Knowledge drift', 'The documented process slowly separates from what actually happens in the field.'],
            ['Training decay', 'Employees get trained on standards that no longer match real execution.'],
            ['Repeat problems', 'Managers keep coaching the same issues because the source problem never gets corrected.']
          ].map(([title, text]) => (
            <Card key={title} className="border border-white/10 bg-white/5 p-6 text-white">
              <IconBadge className="mb-5 h-10 w-10 bg-white/5 text-[#12c9bf]">?</IconBadge>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="audit" className="bg-[#102f43]/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#12c9bf]">Quick first step</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Start with a Knowledge Check Audit.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Before a business commits to a full system, CompleteLoop can start with a focused audit of one repeated problem, one team, or one location group. The goal is simple: find where execution, coaching, training, and knowledge no longer match.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button>Book a Knowledge Check <ArrowIcon /></Button>
                <Button href="#contact" variant="secondary">Ask what we review</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['1', 'Pick one recurring issue', 'Choose a problem that keeps showing up across people, locations, or customer interactions.'],
                ['2', 'Review current knowledge', 'Compare SOPs, training content, expectations, and manager coaching notes.'],
                ['3', 'Check real execution', 'Look for the gap between what the business says should happen and what actually happens.'],
                ['4', 'Identify the fix', 'Recommend what should change in coaching, training, documentation, or follow-up.']
              ].map(([icon, title, text]) => (
                <Card key={title} className="border border-white/10 bg-white/5 p-6 text-white">
                  <IconBadge className="mb-5 h-11 w-11 bg-[#12c9bf] text-slate-950">{icon}</IconBadge>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#089e98]">The 3-in-1 outcome</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Coaching, learning, and knowledge improvement in one operating loop.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">CompleteLoop does not replace your KMS, LMS, HR tools, or dashboards. It feeds and corrects them by turning verified coaching outcomes into operational truth.</p>
            </div>
            <div className="grid gap-5">
              {[
                ['✓', 'Coaching Management', 'Managers document specific behavior, follow up, verify change, and recognize progress.'],
                ['L', 'Learning Improvement', 'Repeated coaching patterns reveal when training is incomplete, outdated, or misunderstood.'],
                ['AI', 'Knowledge Intelligence', 'Verified outcomes identify what knowledge must be corrected before it feeds automation or AI.']
              ].map(([icon, title, text]) => (
                <Card key={title} className="border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                  <div className="flex gap-5">
                    <IconBadge className="h-12 w-12 shrink-0 bg-[#d9fffc] text-[#089e98]">{icon}</IconBadge>
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="loop" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#12c9bf]">How it works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">The loop is not complete until knowledge improves.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Coaching is the measurement instrument. The outcome is knowledge that stays aligned with operational reality.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {loopSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#12c9bf] font-bold text-slate-950">{index + 1}</div>
                <div className="font-medium text-slate-100">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102f43]/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-4">
            {proofMetrics.map(([number, label]) => (
              <Card key={label} className="border border-white/10 bg-white/5 p-6 text-white">
                <div className="text-4xl font-semibold text-[#12c9bf]">{number}</div>
                <div className="mt-3 leading-6 text-slate-300">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#12c9bf]">Who it serves</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Built for service businesses where consistency determines value.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map(([icon, title, text]) => (
            <Card key={title} className="border border-white/10 bg-white/5 p-7 text-white">
              <IconBadge className="mb-5 h-12 w-12 bg-white/5 text-[#12c9bf]">{icon}</IconBadge>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#089e98]">Powered by 3P</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Built from the operating system behind better coaching, better management, and better business results.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">CompleteLoop is powered by the 3P Solutions approach developed by Brent Pattison: a practical way to connect People, Product, and Profit through clear planning, reliable processes, measurable performance, and coaching that closes the loop with recognition.</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">The product takes that operating philosophy and turns it into a software system that helps multi-location service businesses verify what is actually happening, improve what people know, and stop the same problems from repeating.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {aboutPoints.map(([title, text]) => (
                <Card key={title} className="border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                  <IconBadge className="mb-5 h-10 w-10 bg-[#d9fffc] text-[#089e98]">✓</IconBadge>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
        <div className="rounded-[2rem] bg-[#12c9bf] p-8 text-slate-950 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <IconBadge className="mb-5 h-12 w-12 bg-slate-950 text-white">✓</IconBadge>
              <h2 className="text-4xl font-semibold tracking-tight">Ready to find what keeps repeating?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-800">Start with a Knowledge Check Audit. Pick one repeated problem, one team, or one location group. CompleteLoop will show what needs to change in coaching, training, and knowledge.</p>
            </div>
            <a href="mailto:brent@completeloop.io" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-slate-800">Book a Knowledge Check <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-300">
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="inline-flex items-center justify-center gap-3">
            <img src={faviconLogo} alt="" className="h-5 w-5 rounded-sm bg-white" />
            CompleteLoop © 2026. Growth built on truth, not assumptions.
          </span>
          <span className="text-slate-400">Powered by 3P Solutions and the PRAISE coaching methodology.</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<CompleteLoopLandingPage />);
