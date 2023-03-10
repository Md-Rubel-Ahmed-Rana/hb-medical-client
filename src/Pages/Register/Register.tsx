import React, { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    console.log(name);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createUser(email, password, navigate)
    }

    return (
        <div className="lg:w-1/2 bg-slate-100 mx-auto my-20 p-10 rounded">
            <h3 className="text-2xl text-center mb-10">Register Now</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block">Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="w-full p-2" required />
            </div>
            <div className="mb-5">
                <label className="block">Email</label>
                <input onChange={(e) => setEmail(e.target.value)}  type="email" name='email' placeholder="Email" className="w-full p-2" required />
            </div>
            <div className="mb-5">
                <label className="block">Password</label>
                <input onChange={(e) => setPassword(e.target.value)}  type="password" name='password' placeholder="Password" className="w-full p-2" required/>
            </div>
            <button type='submit' className="bg-blue-700 w-full px-10 py-2 rounded text-center text-white">Register</button>
        </form>
        <div className='mt-3'>
            <p>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link> </p>
        </div>
        </div>
    );
};

export default Register;