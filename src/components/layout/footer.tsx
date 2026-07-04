import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            Farrel Lokajaya
          </Link>

          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} Farrel Lokajaya. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
          <a
            href="https://github.com/farrellokajaya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            <FaGithub aria-hidden="true" className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/farrellokajaya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            <FaLinkedinIn aria-hidden="true" className="h-5 w-5" />
          </a>

          <a
            href="mailto:farrellokajaya1@gmail.com"
            className="transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            Email
          </a>

          <Link
            href="/#home"
            className="transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}