// frontend/components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* Add more links here */}
      </nav>
    </footer>
  );
}

export default Footer;