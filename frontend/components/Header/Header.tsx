// frontend/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav className='flex bg-gray-400 text-white p-4 items-left justify-around'>
        <Link href="/">Home</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;