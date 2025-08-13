import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">TH Site</a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a>
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}