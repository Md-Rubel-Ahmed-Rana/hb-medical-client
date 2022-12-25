import React, { useEffect, useState } from 'react';
import axios from "axios"

type PatientTypes = {
    patientName: string,
    phoneNumber: string,
    age: string,
    department: string,
    doctorName: string,
    _id: string
}

const Patients = () => {
    const [patients, setPatients] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/appointment")
        .then((res) => res.json())
        .then((data) => setPatients(data.result))
        .catch((err) => console.log(err))
    }, [])

    const handleDelete  = (id: string) => {
        axios.delete(`http://localhost:5000/appointment/${id}`)
        .then(() => {
            const remaining = patients.filter((patient: PatientTypes) => patient._id !== id);
            setPatients(remaining)
        })
        .catch((err) => console.log(err))
    }
 
    return (
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead className='flex justify-between gap-10 bg-blue-700 p-2 rounded text-white'>
                    <th>SR.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   {
                    patients.map((patient: PatientTypes, index) =>  <tr className='flex items-center justify-between gap-10  p-2 rounded border mt-2'>
                        <td>{index + 1}</td>
                        <td>{patient.patientName}</td>
                        <td>{patient.phoneNumber}</td>
                        <td>{patient.age}</td>
                        <td>{patient.department}</td>
                        <td>{patient.doctorName}</td>
                        <td><button onClick={() => handleDelete(patient._id)} className='bg-red-700 p-2 rounded text-white'>Delete</button></td>
                    </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default Patients;