import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import './index.css';

function IconLightning() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.3 1.046A1 1 0 0 1 12 1h5a1 1 0 0 1 .8 1.6l-4.2 5.6H18a1 1 0 0 1 .9 1.4l-5 12a1 1 0 0 1-1.85-.62l.76-6.1H9a1 1 0 0 1-.8-1.6l3.1-4.133L10 2a1 1 0 0 1 1.3-.954z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2 4 5v6c0 5.25 3.438 10.039 8 11 4.562-.961 8-5.75 8-11V5l-8-3z" />
    </svg>
  );
}

function IconCog() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M19.14 12.94a7.95 7.95 0 0 0 .06-.94 7.95 7.95 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.66l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.96 7.96 0 0 0-1.63-.94l-.36-2.53A.5.5 0 0 0 13.85 1h-3.7a.5.5 0 0 0-.5.42l-.36 2.53a7.96 7.96 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22L2.74 7.4a.5.5 0 0 0 .12.66l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.86 13.1a.5.5 0 0 0-.12.66l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96c.5.37 1.05.69 1.63.94l.36 2.53a.5.5 0 0 0 .5.42h3.7a.5.5 0 0 0 .5-.42l.36-2.53c.58-.25 1.13-.57 1.63-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.66l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main" className="mx-auto max-w-6xl px-4 md:px-6">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
              New • Modern design refresh
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Build faster with a clean, accessible UI
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              A refreshed design system powered by Tailwind CSS with dark mode and responsive components.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#features" className="focus-ring inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Explore features
              </a>
              <a href="https://github.com/harmartim-oss/TH_Site" className="focus-ring inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-10 md:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Fast by default" icon={<IconLightning />}>Powered by Vite and Tailwind for instant feedback and production-ready builds.</FeatureCard>
            <FeatureCard title="Accessible" icon={<IconShield />}>Includes sensible focus styles, contrast-aware colors, and a skip link.</FeatureCard>
            <FeatureCard title="Customizable" icon={<IconCog />}>Tweak the theme and components with utility classes and configuration.</FeatureCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
