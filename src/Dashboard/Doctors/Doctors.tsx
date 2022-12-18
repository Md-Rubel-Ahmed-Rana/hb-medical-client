import React from 'react';

const Doctors = () => {
    return (
        <div>
            <h3 className='text-2xl'>All Doctors</h3>
            <table>
                <thead>
                    <th></th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Designation</th>
                </thead>
            </table>
        </div>
    );
};

export default Doctors;