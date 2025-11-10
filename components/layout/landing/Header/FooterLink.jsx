
import Link from 'next/link';

export default function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-blue-500 transition text-sm text-gray-700"
    >
      {children}
    </Link>
  );
}
