import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Домашняя страница</h1>
            <Link href="/login">Вход</Link>
            <Link href="/register">Регистрация</Link>
        </div>
    );
};

export default Home;