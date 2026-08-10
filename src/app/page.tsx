import {
  Ticket, Building2, FileText, Receipt, FolderKanban, Clock,
  BarChart3, Shield, Sparkles, Github, ArrowRight, Check,
  Server, Database, Lock, Terminal, Users, Plug,
} from 'lucide-react';
import Nav from '@/components/Nav';
import { site } from '@/lib/site';

const MODULES = [
  { icon: Ticket, name: 'Service Desk', body: 'Tickets with notes, status flow, SLA tracking and time capture. Reference numbers, assignment, and an audit trail on every change.' },
  { icon: Building2, name: 'CRM', body: 'Companies, contacts and a drag-and-drop opportunity pipeline. Prospects convert to customers without re-keying anything.' },
  { icon: FileText, name: 'Contracts', body: 'Managed service, fixed price, pre-pay hours and T&M. Contracts absorb labour and drive the recurring invoice, so the two never disagree.' },
  { icon: Receipt, name: 'Quotes & Invoices', body: 'Line-item quote builder with PDF output and a customer-facing portal. Invoices with payments, recurring schedules and ready-to-bill queues.' },
  { icon: FolderKanban, name: 'Projects', body: 'Tasks, milestones and budget tracking, with time booked against them feeding straight into profitability.' },
  { icon: Clock, name: 'Timesheets', body: 'Log time against tickets or projects. Cost is snapshotted at write time, so changing a rate never rewrites history.' },
  { icon: BarChart3, name: 'Reporting', body: 'Revenue, utilisation, ticket and project reports — plus true profitability: revenue minus engineer cost minus service cost.' },
  { icon: Shield, name: 'Users & Roles', body: 'Full RBAC, per-tenant engineer cost rates, enforced two-factor, and admin impersonation with an audit record.' },
];

const REPLACES = ['Autotask', 'HaloPSA', 'ConnectWise', 'Syncro', 'Atera'];

const AI_POINTS = [
  'Bring your own key — Anthropic, OpenAI, or anything OpenAI-compatible including a local Ollama model.',
  'An assistant on every screen that already knows your schema, so it answers from your data rather than guessing.',
  'Ask in plain English: "which contracts lost money last quarter?" — it writes the query and explains the answer.',
  'An MCP server, so you can drive VibePSA from Claude Desktop instead of clicking through screens.',
  'Read-only by default. Writes are opt-in, and the assistant confirms before it creates anything.',
];

const FAQ = [
  {
    q: 'Is it really free?',
    a: `Yes. VibePSA is ${site.license} licensed — download it, run it, modify it, use it commercially, for nothing. There is no seat count, no feature gate, and no paid tier holding anything back. If you self-host, your only cost is the hosting itself.`,
  },
  {
    q: 'What does AGPL mean for me as an MSP?',
    a: 'If you run VibePSA to operate your own MSP — the normal case — it means nothing at all. Use it however you like. The licence only bites if you modify VibePSA and offer that modified version to others as a hosted service, in which case you have to publish your changes. It exists to stop someone taking this and selling it back as closed software.',
  },
  {
    q: 'Where does my data live?',
    a: 'Wherever you put it. VibePSA runs against your own PostgreSQL database — Supabase, Neon, RDS, or Postgres on a box under your desk. Nothing phones home. There is no vendor telemetry and no central service that has to be up for your PSA to work.',
  },
  {
    q: 'Can I migrate off it later?',
    a: "It is a documented PostgreSQL schema you already own, and the full SQL is in the repo. Take a pg_dump and it's yours. Being easy to leave is the point — that's the problem with the incumbents.",
  },
  {
    q: 'Is it production-ready?',
    a: 'Be realistic about where this is. The modules described here are built and working, but VibePSA is young and has not been through years of hardening across hundreds of MSPs the way the commercial products have. Trial it alongside what you run today before you trust it with your billing.',
  },
  {
    q: 'How do I get help?',
    a: `GitHub issues for bugs and feature requests, and discussions for questions. There is no support SLA — it is an open source project, not a product with a contract behind it. If you need commercial support, get in touch at ${site.contactEmail}.`,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative overflow-hidden">
          {/* Glow behind the headline. Decorative only. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-14rem] h-[34rem] w-[62rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
          />
          <div className="section relative py-24 text-center sm:py-32">
            <a
              href={site.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-surface-300 transition-colors hover:bg-white/10"
            >
              <Github className="h-3.5 w-3.5" aria-hidden />
              {site.license} on GitHub
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The PSA your MSP
              <br />
              <span className="text-brand-400">actually owns.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-400">
              A complete Professional Services Automation platform — service desk, CRM,
              contracts, quoting, invoicing, projects and time. Open source, self-hosted,
              and free of per-seat pricing forever.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#demo" className="btn-primary">
                Try the demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="#self-host" className="btn-secondary">
                <Server className="h-4 w-4" aria-hidden />
                Self-host it
              </a>
            </div>

            <p className="mt-6 text-sm text-surface-500">
              No credit card. No sales call. No seat count.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------- What it replaces */}
        <section className="border-y border-white/10 bg-white/[0.02] py-8">
          <div className="section flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-sm text-surface-500">An alternative to</span>
            {REPLACES.map((n) => (
              <span key={n} className="font-medium text-surface-400">{n}</span>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ The pitch */}
        <section className="section py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Why another PSA</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              You are renting the system that runs your business.
            </h2>
            <p className="mt-5 text-lg text-surface-400">
              Per-seat pricing punishes you for hiring. Your data sits in someone else&apos;s
              database on someone else&apos;s terms, and getting it out is deliberately
              tedious. Every renewal is a negotiation you are on the wrong side of.
            </p>
            <p className="mt-4 text-lg text-surface-400">
              VibePSA is the other option: run it yourself, read every line, change what
              you don&apos;t like, and add engineers without opening a spreadsheet to work
              out what it will cost.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Database, title: 'Your database', body: 'Runs on your own PostgreSQL. Nothing phones home, and a pg_dump is a complete export.' },
              { icon: Users, title: 'Unlimited seats', body: 'Add the whole team. The price is the same as adding nobody, because there is no price.' },
              { icon: Lock, title: 'No lock-in', body: 'Documented schema, full SQL in the repo, AGPL licence. Leaving is a supported path.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass rounded-xl p-6">
                <Icon className="h-5 w-5 text-brand-400" aria-hidden />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- Features */}
        <section id="features" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section">
            <div className="max-w-2xl">
              <p className="eyebrow">Modules</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                A whole PSA, not a ticketing app
              </h2>
              <p className="mt-4 text-lg text-surface-400">
                The pieces an MSP actually runs on, built to work together rather than
                bolted alongside each other.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {MODULES.map(({ icon: Icon, name, body }) => (
                <div
                  key={name}
                  className="glass rounded-xl p-6 transition-colors hover:border-white/20"
                >
                  <Icon className="h-5 w-5 text-brand-400" aria-hidden />
                  <h3 className="mt-4 font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- AI */}
        <section id="ai" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Built in, not bolted on</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                An assistant that knows your business
              </h2>
              <p className="mt-4 text-lg text-surface-400">
                Not a chatbot in the corner. The assistant is given your actual schema, so
                it answers from your data — and it is scoped to your tenant at the database
                level, not by asking it nicely.
              </p>
              <ul className="mt-7 space-y-3.5">
                {AI_POINTS.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                    <span className="text-sm leading-relaxed text-surface-300">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Sparkles className="h-4 w-4 text-brand-400" aria-hidden />
                <span className="text-sm font-medium text-white">VibePSA Assistant</span>
              </div>
              <div className="space-y-4 pt-5 text-sm">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-white">
                  Which contracts lost money last quarter?
                </p>
                <div className="max-w-[92%] space-y-2.5 rounded-2xl rounded-bl-sm bg-white/5 px-4 py-3">
                  <p className="text-surface-200">
                    Two of your fourteen active contracts ran at a loss:
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-surface-400">
                    <li className="flex justify-between gap-4">
                      <span>Northwind Ltd</span>
                      <span className="text-red-400">−£1,240 (−31%)</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Baxter &amp; Co</span>
                      <span className="text-red-400">−£310 (−4%)</span>
                    </li>
                  </ul>
                  <p className="text-surface-400">
                    Northwind absorbed 41 engineer hours against a £400/month fee. Shall I
                    draft a renewal at a rate that covers it?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ Self-host */}
        <section id="self-host" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Download</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Running in about ten minutes
              </h2>
              <p className="mt-4 text-lg text-surface-400">
                You need Node 18 or newer and a PostgreSQL database. Deploy it to Vercel,
                a VPS, or your own hardware — it is a standard Next.js app with a Prisma
                schema, not an appliance.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Terminal, t: 'Clone and install', d: 'One command, no build toolchain to assemble first.' },
                  { icon: Database, t: 'Point at Postgres', d: 'Set DATABASE_URL and push the schema. The full SQL is in the repo if you would rather run it yourself.' },
                  { icon: Plug, t: 'Add your keys', d: 'SMTP for outbound mail, and an LLM key if you want the assistant. Both optional to get started.' },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="flex gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-600/15">
                      <Icon className="h-4 w-4 text-brand-400" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{t}</h3>
                      <p className="mt-1 text-sm text-surface-400">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={site.github} className="btn-primary">
                  <Github className="h-4 w-4" aria-hidden />
                  Get the source
                </a>
                <a href={`${site.github}/blob/main/INSTALL.md`} className="btn-secondary">
                  Installation guide
                </a>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-surface-500">bash</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-surface-300">
                <code>{`# 1. Get it
git clone ${site.github}.git
cd vibepsa && npm install

# 2. Configure
cp .env.example .env
#   DATABASE_URL="postgresql://..."

# 3. Create the schema
npx prisma db push
npm run db:seed

# 4. Go
npm run dev
#   → http://localhost:3000`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- Demo */}
        <section id="demo" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section">
            <div className="glass rounded-2xl p-10 text-center sm:p-14">
              <p className="eyebrow">Live demo</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Have a click around first
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-surface-400">
                A full instance loaded with a fictional MSP&apos;s data — tickets, contracts,
                invoices and all. Nothing to install, and you cannot break anything that
                matters.
              </p>

              {site.demoReady ? (
                <>
                  <a href={site.demoUrl} className="btn-primary mt-8">
                    Open the demo
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <div className="mx-auto mt-8 w-fit rounded-lg border border-white/10 bg-surface-950/60 px-5 py-3 text-left font-mono text-sm">
                    <div className="text-surface-400">
                      email <span className="text-surface-200">{site.demoEmail}</span>
                    </div>
                    <div className="text-surface-400">
                      password <span className="text-surface-200">{site.demoPassword}</span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm text-surface-500">
                    Resets nightly. Everyone shares one instance, so treat it as a
                    showroom rather than a sandbox — and don&apos;t put anything real in it.
                  </p>
                </>
              ) : (
                <>
                  <span className="btn-secondary pointer-events-none mt-8 opacity-60">
                    Demo coming soon
                  </span>
                  <p className="mx-auto mt-5 max-w-md text-sm text-surface-500">
                    The hosted demo isn&apos;t up yet. In the meantime, the repository has a
                    seed script that fills a local install with the same sample data —
                    clone it and you have the demo on your own machine in minutes.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- Open source */}
        <section id="open-source" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Open source</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Built in the open
              </h2>
              <p className="mt-4 text-lg text-surface-400">
                VibePSA started at an MSP consultancy that got tired of watching clients
                get squeezed at renewal. It is {site.license} licensed and developed in
                public — every commit, every issue, every decision.
              </p>
              <p className="mt-4 text-surface-400">
                It is early, and it shows in places. If you run an MSP and something here
                is wrong or missing, that is exactly the feedback worth having — an issue
                describing how your business actually works is as useful as a pull request.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.github} className="btn-primary">
                  <Github className="h-4 w-4" aria-hidden />
                  Browse the code
                </a>
                <a href={`${site.github}/issues`} className="btn-secondary">
                  Open an issue
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-5">
              {[
                { k: site.license, v: 'Licence — free for commercial use' },
                { k: '58', v: 'Database tables, fully documented' },
                { k: '£0', v: 'Per seat, per month, forever' },
                { k: '100%', v: 'Of the source, not an open core' },
              ].map(({ k, v }) => (
                <div key={v} className="glass rounded-xl p-6">
                  <dt className="text-2xl font-bold text-brand-400">{k}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-surface-400">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ------------------------------------------------------------ FAQ */}
        <section id="faq" className="scroll-mt-16 border-t border-white/10 py-24">
          <div className="section max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Questions</h2>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {FAQ.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-white marker:content-none">
                    {q}
                    <span
                      aria-hidden
                      className="shrink-0 text-xl leading-none text-surface-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-surface-400">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- CTA */}
        <section className="border-t border-white/10 py-24">
          <div className="section text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stop renting your own operations
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-surface-400">
              Clone it, point it at a database, and see what you think.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={site.github} className="btn-primary">
                <Github className="h-4 w-4" aria-hidden />
                Get VibePSA
              </a>
              <a href="#self-host" className="btn-secondary">Read the install guide</a>
            </div>
          </div>
        </section>
      </main>

      {/* --------------------------------------------------------- Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="section flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <span
                aria-hidden
                className="grid h-7 w-7 place-items-center rounded-md bg-brand-600 text-xs font-bold text-white"
              >
                V
              </span>
              <span className="font-semibold text-white">{site.name}</span>
              <span className="text-sm text-surface-500">— {site.tagline}</span>
            </div>
            <p className="mt-2.5 text-sm text-surface-500">{site.byline}</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-surface-400">
            <a href={site.github} className="transition-colors hover:text-white">GitHub</a>
            <a href={site.licenseUrl} className="transition-colors hover:text-white">
              {site.license}
            </a>
            <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
