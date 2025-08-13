export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/70 py-10 text-sm text-neutral-500 dark:border-neutral-800/70 dark:text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p>&copy; {new Date().getFullYear()} TH Site. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200">Privacy</a>
          <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200">Terms</a>
          <a href="https://github.com/harmartim-oss/TH_Site" className="hover:text-neutral-700 dark:hover:text-neutral-200">GitHub</a>
        </div>
      </div>
    </footer>
  );
}