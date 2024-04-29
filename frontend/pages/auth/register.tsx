import axios from 'axios';
import { useState } from 'react';

const Register: React.FC<{ data: any, error: any }> = ({ data, error }) => {
    const [email, setEmail] = useState<string>('anry@your-domain.com');
    const [password, setPassword] = useState<string>('12345678');
    const [password_confirm, setPasswordConfirm] = useState<string>('12345678');
    const [lang, setLang] = useState<string>('ru');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       // console.log(data);
        //console.error(error);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <input
                type="password"
                value={password_confirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Confirm Password"
                required
            />
            <input
                type="text"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                placeholder="Language"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export async function getServerSideProps(context: { query: { email: string; password: string; password_confirm: string; lang: string; }; }) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/register`, {
            email: context.query.email,
            password: context.query.password,
            password_confirm: context.query.password_confirm,
            lang: context.query.lang
        });
        return { props: { data: response.data } };
    } catch (error) {
        return { props: { error: (error as Error).message } };
    }
}

export default Register;