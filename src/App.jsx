const DEMO_URL = "https://service-tools-studio.github.io/quote-calculator-lead-magnet/";
const EMAIL = "service.tools.studio@gmail.com";
const SUBJECT = "Quote Tool Setup";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.12)]" />
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-10 text-xl font-semibold text-sky-700">
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

        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
          Turn website visitors into{" "}
          <span className="relative inline-block">
            <span className="relative z-10">qualified leads</span>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-sky-200 rounded-sm -z-0" />
          </span>{" "}
          — automatically.
        </h1>

        <div className="mt-4 h-1 w-16 rounded-full bg-sky-600" />


        <p className="mt-4 max-w-2xl text-stone-600">
          A live instant quote tool that helps cleaning businesses capture qualified leads.<br />
          It provides customers with a fast estimate while capturing lead details
          for follow-up.
        </p>

        <div className="mt-8 mb-8 h-px w-full bg-stone-200" />

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
        <Card>
          <ul className="list-disc space-y-2 pl-5 text-sm text-stone-600">
            <li>
              Calculates an{" "}
              <span className="font-semibold text-stone-900">instant estimate range</span>{" "}
              from home details and add-ons
            </li>
            <li>
              Collects{" "}
              <span className="font-semibold text-stone-900">contact info</span>{" "}
              (name, email, phone, zip)
            </li>
            <li>
              Saves leads automatically to{" "}
              <span className="font-semibold text-stone-900">Google Sheets</span>
            </li>
            <li>
              Sends{" "}
              <span className="font-semibold text-stone-900">confirmation emails</span>{" "}
              to both you and the customer
            </li>
          </ul>
        </Card>

        <SectionTitle>Why business owners use it</SectionTitle>
        <Card>
          <ul className="list-disc space-y-2 pl-5 text-sm text-stone-600">
            <li>Responds instantly (no waiting, no back-and-forth)</li>
            <li>Converts more serious inquiries</li>
            <li>Keeps leads organized automatically</li>
            <li>Saves admin time</li>
          </ul>
        </Card>

        <SectionTitle>How it works</SectionTitle>
        <Card>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-stone-600">
            <li>A visitor enters their home details</li>
            <li>They see an estimate range instantly</li>
            <li>They submit their contact info to receive a copy of the estimate</li>
            <li>You receive the lead + they receive a confirmation email</li>
          </ol>
        </Card>

        <SectionTitle>What’s included (done-for-you setup)</SectionTitle>
        <Card>
          <ul className="list-disc space-y-2 pl-5 text-sm text-stone-600">
            <li>Custom pricing rules (ranges, add-ons, service type)</li>
            <li>Light branding (logo/colors optional)</li>
            <li>Google Sheet lead tracker</li>
            <li>Owner notification email</li>
            <li>Customer confirmation email</li>
            <li>Hosted link or embed-ready version</li>
          </ul>
        </Card>

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
        </Card>

        <footer className="mt-12 border-t border-stone-200 pt-6 text-xs text-stone-500">
          Built by <span className="font-semibold text-stone-700">Service Tools Studio</span>
        </footer>
      </div>
    </div>
  );
}
