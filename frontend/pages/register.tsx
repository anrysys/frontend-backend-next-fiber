// require('dotenv').config();
import axios from 'axios';
import { useState } from 'react';

// "first_name": "Anry",
// "last_name": "Akishyn",
// "phone_code": "38068",
// "phone_number": "1468300",
// "email": "anry@your-domain.com",
// "password": "12345678",
// "password_confirm": "12345678",
// "lang": "ru"

const Register: React.FC = () => {

    // const [first_name, setFirstName] = useState<string>('Anry');
    // const [last_name, setLastName] = useState<string>('Akishyn');
    // const [phone_code, setPhoneCode] = useState<string>('38068');
    // const [phone_number, setPhoneNumber] = useState<string>('1468300');
    const [email, setEmail] = useState<string>('anry@your-domain.com');
    const [password, setPassword] = useState<string>('12345678');
    const [password_confirm, setPasswordConfirm] = useState<string>('12345678');
    const [lang, setLang] = useState<string>('ru');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/register`, {
                // phone_code,
                // phone_number,
                // first_name,
                // last_name,                
                email,
                password,
                password_confirm,
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
                type="password"
                value={password_confirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="password_confirm"
                required
            />
            <input
                type="hidden"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                required
            />   

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Register;
