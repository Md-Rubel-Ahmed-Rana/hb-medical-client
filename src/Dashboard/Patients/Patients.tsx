import React from 'react';

const Patients = () => {
    return (
        <div>
            <table className='w-full'>
                <thead className='flex justify-between gap-10 bg-blue-700 p-2 rounded text-white'>
                    <th>SR.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr className='flex items-center justify-between gap-10  p-2 rounded border mt-2'>
                        <td>1</td>
                        <td>Rubel</td>
                        <td>rubel@gmail.com</td>
                        <td>01758049882</td>
                        <td>22</td>
                        <td>Pathology</td>
                        <td><button className='bg-green-500 p-2 rounded text-white'>Seen</button></td>
                        <td><button className='bg-red-700 p-2 rounded text-white'>Delete</button></td>
                    </tr>
                    <tr className='flex items-center justify-between gap-10  p-2 rounded border mt-2'>
                        <td>1</td>
                        <td>Rubel</td>
                        <td>rubel@gmail.com</td>
                        <td>01758049882</td>
                        <td>22</td>
                        <td>Pathology</td>
                        <td><button className='bg-green-500 p-2 rounded text-white'>Unseen</button></td>
                        <td><button className='bg-red-700 p-2 rounded text-white'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Patients;