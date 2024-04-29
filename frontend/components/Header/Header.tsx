// frontend/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
        {/* Add more links here */}
      </nav>
    </header>
  );
}

export default Header;