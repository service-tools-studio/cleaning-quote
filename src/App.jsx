import demoImage from './assets/demo-image.png';
import { smoothScrollTo } from './helpers';

const DEMO_URL = "https://service-tools-studio.github.io/quote-calculator-lead-magnet/";
const EMAIL = "service.tools.studio@gmail.com";
const SUBJECT = "Quote Tool Setup";

function IphoneMockup({ imageSrc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative mx-auto block max-w-[260px] transition hover:-translate-y-1"
    >
      {/* Phone body */}
      <div className="relative rounded-[2.2rem] bg-black p-[10px] shadow-xl">

        {/* Notch */}
        <div className="absolute left-1/2 top-[6px] z-10 h-[22px] w-[120px] -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
          <img
            src={imageSrc}
            alt="Instant cleaning quote calculator demo"
            className="w-full"
          />
        </div>
      </div>

      {/* Hover hint */}
      <div className="mt-3 text-center text-xs font-medium text-stone-500 opacity-0 transition group-hover:opacity-100">
        Tap to view live demo →
      </div>
    </a>
  );
}


function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.12)]" />
      {children}
    </span>
  );
}

function TrustPills() {
  const items = ["No monthly fees", "Built specifically for cleaning businesses"];

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((label) => (
        <span
          key={label}
          className="
  inline-flex items-center gap-2
  rounded-full
  bg-sky-50
  text-sky-700
  px-4 py-1.5
  text-sm font-medium
"
        >
          <span className="text-green-600" aria-hidden="true">
            ✔
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}


function SectionTitle({ children }) {
  return (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-sky-700">
      {children}
    </h2>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

function LinkButton({ href, children, subtle = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 " +
        (subtle
          ? "border border-stone-200 bg-white text-stone-900"
          : "border border-sky-200 bg-white text-stone-900")
      }
    >
      {children}
    </a>
  );
}

export default function App() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Pill>Service Tools Studio</Pill>
        {/* Demo preview */}
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
              Turn website visitors into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">qualified leads</span>
                <span className="absolute inset-x-0 bottom-0 h-2 bg-sky-200 rounded-sm -z-0" />
              </span>{" "}
              — automatically.
            </h1>

            <div className="mt-4 h-1 w-16 rounded-full bg-sky-600" />

            <p className="mt-4 max-w-xl text-stone-600">
              A live instant quote tool for cleaning businesses that gives customers fast
              estimates and captures real leads.
            </p>

            <TrustPills />
            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/40 px-4 py-2 text-sm">
              <span className="text-amber-300">★</span>
              <p className="text-stone-700">
                Currently in use on{" "}
                <a
                  href="https://goldenhourcleaningco.com/residential"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-900"
                >
                  Golden Hour Cleaning Co.
                </a>
                ’s website.
              </p>
            </div>

            {/* Scroll cue */}
            <button
              type="button"
              onClick={() => smoothScrollTo("#features", 800)}
              className="mt-6 inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-700"
            >
              Here’s what it does <span aria-hidden className="ml-1">↓</span>
            </button>
          </div>

          {/* Right: iPhone */}
          <div className="flex justify-center md:justify-end">
            <IphoneMockup imageSrc={demoImage} href={DEMO_URL} />
          </div>
        </div>
        <div className="mt-8 mb-8 h-px w-full bg-stone-200" />
        {/* <p className="mt-3 mb-3 text-sm text-stone-600">
          Currently powering quotes for:{" "}
          <a
            href="https://goldenhourcleaningco.com/residential"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-900"
          >
            Golden Hour Cleaning Co.
          </a>{" "}
          (custom quote calculator on their site).
        </p> */}

        <div id="features" />
        <Card>
          <p className="text-sm text-stone-600">
            Explore the demo, then reach out if you want this customized for your pricing and branding.
          </p>


          <div className="mt-5 flex flex-wrap gap-3">
            <LinkButton href={DEMO_URL}>View the live demo →</LinkButton>
            <LinkButton href={mailto} subtle>
              Request setup 🔧
            </LinkButton>
          </div>
        </Card>

        <SectionTitle>What this tool does</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                ⚡
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">Instant estimate range</p>
                <p className="mt-1 text-sm text-stone-600">
                  Calculates pricing from home details + add-ons (no waiting, no back-and-forth).
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                🧾
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">Captures contact details</p>
                <p className="mt-1 text-sm text-stone-600">
                  Collects name, email, phone, and zip so you get real leads (not tire-kickers).
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                📋
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">Auto-saves to Google Sheets</p>
                <p className="mt-1 text-sm text-stone-600">
                  Every submission is logged automatically so you stay organized without admin work.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                ✉️
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">Confirmation emails</p>
                <p className="mt-1 text-sm text-stone-600">
                  Sends a copy to the customer and notifies you—so both sides have it instantly.
                </p>
              </div>
            </div>
          </div>
        </div>


        <SectionTitle>Why cleaning business owners use it</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">
              Responds instantly
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Customers get answers right away—no waiting, no back-and-forth.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">
              Higher-quality inquiries
            </p>
            <p className="mt-1 text-sm text-stone-600">
              People who complete the form are more serious about booking.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">
              Automatic organization
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Every lead is saved and tracked without extra effort.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-900">
              Less admin work
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Fewer emails, fewer follow-ups, more time back in your day.
            </p>
          </div>
        </div>

        <SectionTitle>What’s included (done-for-you setup)</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              💰
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Custom pricing rules
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Ranges, add-ons, and service types tailored to how you actually price.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              🎨
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Light branding
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Logo and colors applied (optional) so it fits your site.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              📊
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Google Sheet lead tracker
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Every submission logged automatically in a simple spreadsheet.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              🔔
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Owner notification email
              </p>
              <p className="mt-1 text-sm text-stone-600">
                You’re notified instantly when a new lead comes in.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              ✉️
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Customer confirmation email
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Customers receive a copy of their estimate automatically.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              🔗
            </span>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Hosted or embed-ready link
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Use a shareable link or embed it directly on your website.
              </p>
            </div>
          </div>
        </div>


        <SectionTitle>Setup time</SectionTitle>
        <Card>
          <p className="text-sm text-stone-600">
            Typical setup:{" "}
            <span className="font-semibold text-stone-900">
              same day or within 24–48 hours
            </span>
          </p>
        </Card>

        <SectionTitle>Beta pricing</SectionTitle>
        <Card>
          <p className="text-sm text-stone-600">
            <span className="font-semibold text-stone-900">
              Beta setup (first 3 clients): $297
            </span>
          </p>
          <p className="mt-2 text-sm text-stone-600">
            After beta: pricing will increase.
          </p>
        </Card>

        <SectionTitle>Want this for your business?</SectionTitle>
        <Card>
          <p className="text-sm text-stone-600">
            Email{" "}
            <a
              className="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-900"
              href={mailto}
            >
              {EMAIL}
            </a>
          </p>

          <p className="mt-2 text-sm text-stone-600">
            Subject:{" "}
            <span className="font-semibold text-stone-900">{SUBJECT}</span>
          </p>

          <div className="mt-4 text-sm text-stone-600">
            Include:
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Business name</li>
              <li>City</li>
              <li>How you currently price your services</li>
            </ul>
          </div>

          <div className="mt-5">
            <LinkButton href={mailto}>Email to request setup →</LinkButton>
          </div>
          <p className="mt-3 text-xs text-stone-500">
            I’ll personally review your pricing and follow up with next steps.
          </p>

        </Card>

        <footer className="mt-12 border-t border-stone-200 pt-6 text-xs text-stone-500">
          Built by{" "}
          <a
            href="https://jasminweb.dev"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-stone-700 hover:text-stone-900"
          >
            Service Tools Studio
          </a>
        </footer>
      </div>
    </div>
  );
}
