import React, { useEffect, useState } from 'react';
import axios from "axios"
import swal from 'sweetalert';

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
        fetch("https://hb-medical-server.vercel.app/appointment")
        .then((res) => res.json())
        .then((data) => setPatients(data.result))
        .catch((err) => swal("Opps!", `${err.message}`, "error"))
    }, [])

    const handleDelete  = (id: string) => {
        axios.delete(`https://hb-medical-server.vercel.app/appointment/${id}`)
        .then(() => {
            const remaining = patients.filter((patient: PatientTypes) => patient._id !== id);
            setPatients(remaining)
        })
        .catch((err) => swal("Opps!", `${err.message}`, "error"))
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