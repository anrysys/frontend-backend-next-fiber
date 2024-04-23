import axios from 'axios';
import { useState } from 'react';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Реализуйте логику регистрации
        try {
            const response = await axios.post('http://localhost:8181/api/register', {
                username,
                password
            });
            console.log(response.data); // Обработка ответа от сервера
        } catch (error) {
            console.error(error); // Обработка ошибок запроса
        }        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Register;