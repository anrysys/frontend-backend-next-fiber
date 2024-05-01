// frontend/components/Footer.tsx

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav className='flex flex-col bg-gray-400 text-white p-4 items-center justify-between'>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
    
  );
}

export default Footer;