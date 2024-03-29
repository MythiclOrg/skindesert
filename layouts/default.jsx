import { Navbar } from '@/components/common/Navbar';
import { Link } from '@nextui-org/link';
import { Head } from './head';

export default function DefaultLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mt-4 mx-auto max-w-full px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
        <div>Yeah so thats the footer</div>
        <div>yep</div>
      </footer>
    </div>
  );
}
