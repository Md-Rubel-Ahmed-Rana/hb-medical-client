import React, { useEffect, useState } from 'react';
import axios from "axios"

type DoctorTypes = {
    age: string,
    department: string,
    doctorName: string,
    email: string,
    gender: string,
    image: string,
    joiningDate: string,
    phoneNumber: string,
    _id: string
}

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        fetch("https://hb-medical-server.vercel.app/doctors")
        .then((res) => res.json())
        .then((data) => setDoctors(data.result))
        .catch((err) => console.log(err))
    }, [])

    const handleDelete  = (id: string) => {
        axios.delete(`https://hb-medical-server.vercel.app/doctors/${id}`)
        .then(() => {
            const remaining = doctors.filter((patient: DoctorTypes) => patient._id !== id);
            setDoctors(remaining)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead className='flex justify-between gap-10 bg-blue-700 p-2 rounded text-white'>
                    <th>SR.</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Joining Date</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor: DoctorTypes, index) => <tr key={index} className='flex items-center justify-between gap-10  p-2 rounded border mt-2'>
                        <td>{index + 1}</td>
                        <td><img className='h-10 w-10 rounded-full' src={doctor.image} alt="" /></td>
                        <td>{doctor.doctorName}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.phoneNumber}</td>
                        <td>{doctor.age}</td>
                        <td>{doctor.joiningDate}</td>
                        <td><button onClick={() => handleDelete(doctor._id)} className='bg-red-700 p-2 rounded text-white'>Delete</button></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Doctors;