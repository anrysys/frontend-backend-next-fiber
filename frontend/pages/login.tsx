import axios from 'axios';
import { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('anry@your-domain.com');
    const [password, setPassword] = useState<string>('12345678');
    const [lang, setLang] = useState<string>('ru');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/login`, {
                // phone_code,
                // phone_number,
                // first_name,
                // last_name,                
                email,
                password,
                lang
            });
            console.log(response.data); // Обработка ответа от сервера
        } catch (error) {
            console.error(error); // Обработка ошибок запроса
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
            />
            <input
                type="hidden"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                required
            />            
            <button type="submit">Войти</button>
        </form>
    );
};

export default Login;