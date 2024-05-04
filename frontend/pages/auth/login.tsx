// pages/auth/login.tsx
import axios from 'axios';
import { useState } from 'react';

const Login: React.FC<{ data: JSON, error: JSON }> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [lang, setLang] = useState<string>('ru');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');
        setMessageType('');

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/login`, {
                email,
                password,
                lang
            });
            console.log(response.data); // Обработка ответа от сервера

            // Обработка успешного ответа от сервера
            setMessage('Login successful!'); // Замените на ваше сообщение об успехе
            setMessageType('success');

            // TODO: Add your registration logic here

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // Сервер вернул ответ с кодом ошибки
                    if (error.response.data && error.response.data.errors) {
                        setMessage(error.response.data.errors);
                        setMessageType('error');
                    } else {
                        setMessage('An error occurred. Please try again.');
                        setMessageType('error');
                    }
                } else if (error.request) {
                    // Запрос был сделан, но ответа не было
                    setMessage('No response from server. Please try again later.');
                    setMessageType('error');
                } else {
                    // Произошла ошибка при настройке запроса
                    setMessage('An error occurred. Please try again.');
                    setMessageType('error');
                }
            } else {
                // Неизвестная ошибка
                setMessage('An unknown error occurred.');
                setMessageType('error');
            }
        }

        setLoading(false);
    };


    return (
        <main>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {message && (
                    <p className={`message-${messageType}`}>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="border border-gray-300 p-2"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        minLength={8}
                        className="border border-gray-300 p-2"
                    />
                    <input
                        type="hidden"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Login;