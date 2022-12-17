import React, {FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {email, password}
        console.log(user);
    }

    return (
        <div className="lg:w-1/2 bg-slate-100 mx-auto my-20 p-10 rounded">
        <form onSubmit={handleLogin}>
            <div className="mb-5">
                <label className="block">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="w-full p-2" />
            </div>
            <div className="mb-5">
                <label className="block">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="w-full p-2" />
            </div>
            <button type='submit' className="bg-blue-700 w-full px-10 py-2 rounded text-center text-white">Login</button>
        </form>
        <div className='mt-3'>
            <p>Don't have an account? <Link to="/register" className='text-blue-500'>Register</Link> </p>
        </div>
        </div>
    );
};

export default Login;