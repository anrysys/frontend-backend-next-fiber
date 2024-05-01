const Home: React.FC = () => {
    return (
        // <main>
        //     <h1>Домашняя страница</h1>
        //     <Link href="/login">Вход</Link>
        //     <Link href="/register">Регистрация</Link>
        // </main>
        <main>
            <div className="w-full rounded-lg border bg-gray-50 shadow-sm lg:block m-4">
                <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
                    <div className="grid w-2/3 grid-cols-2 gap-8">
                        <a href="#" className="group flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <div className="mb-1 font-semibold">Growth</div>
                                <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                            </div>
                        </a>
                        <a href="#" className="group flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <div className="mb-1 font-semibold">Security</div>
                                <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                            </div>
                        </a>
                        <a href="#" className="group flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <div>
                                <div className="mb-1 font-semibold">Cloud</div>
                                <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                            </div>
                        </a>
                        <a href="#" className="group flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <div>
                                <div className="mb-1 font-semibold">Analytics</div>
                                <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                            </div>
                        </a>
                    </div>
                    <div className="w-1/3 overflow-hidden rounded-lg border">
                        <div className="h-48 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="flex items-center justify-between gap-2 bg-white p-3">
                            <p className="text-sm text-gray-500">This is some simple filler text.</p>
                            <a href="#" className="inline-block shrink-0 rounded-lg border bg-white px-3 py-1 text-sm font-semibold text-orange-500 outline-none ring-orange-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Home;