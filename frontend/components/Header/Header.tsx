// frontend/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (

    <header className="flex flex-col justify-between lg:block">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-8">
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            My App
          </a>
          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-orange-500 active:text-orange-700">Home</a>
            <a href="#" className="inline-flex items-center gap-1 text-lg font-semibold text-orange-500">
              Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-orange-500 active:text-orange-700">Pricing</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-orange-500 active:text-orange-700">About</a>
          </nav>
          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
            <Link href="/auth/login" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-orange-300 transition duration-100 hover:text-orange-500 focus-visible:ring active:text-orange-600 md:text-base">Sign in</Link>
            <Link href="/auth/register" className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base">Sign up</Link>
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-orange-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;