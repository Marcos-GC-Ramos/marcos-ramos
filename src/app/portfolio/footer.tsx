import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Livremente projetado em{' '}
        <Link
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (abre em uma nova aba)"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
        >
            Figma
        </Link>{' '}
        e codificado em{' '}
        <Link
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (abre em uma nova aba)"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
        >
            Visual Studio Code
        </Link>{' '}
        por mim. Desenvolvido com{' '}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (abre em uma nova aba)"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
        >
            Next.js
        </Link>{' '}
        e{' '}
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (abre em uma nova aba)"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
        >
            Tailwind CSS
        </Link>
        , implementado com{' '}
        <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (abre em uma nova aba)"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
        >
            Vercel
        </Link>
        .
      </p>
    </footer>
  );
}
