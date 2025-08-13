export default function FeatureCard({ icon, title, children }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{children}</p>
    </div>
  );
}