import React, { FormEvent, useState } from 'react';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {name, email, password}
        console.log(user);
    }
    return (
        <div className="lg:w-1/2 bg-slate-100 mx-auto my-20 p-10 rounded">
        <form onSubmit={handleRegister}>
            <div className="mb-5">
                <label className="block">Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="w-full p-2" />
            </div>
            <div className="mb-5">
                <label className="block">Email</label>
                <input onChange={(e) => setEmail(e.target.value)}  type="text" name='email' placeholder="Email" className="w-full p-2" />
            </div>
            <div className="mb-5">
                <label className="block">Password</label>
                <input onChange={(e) => setPassword(e.target.value)}  type="text" name='password' placeholder="Password" className="w-full p-2" />
            </div>
            <button type='submit' className="bg-blue-700 w-full px-10 py-2 rounded text-center text-white">Register</button>
        </form>
        </div>
    );
};

export default Register;