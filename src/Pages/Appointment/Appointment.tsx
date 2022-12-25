import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  department: string,
  doctorName: string,
  appointmentDate: string,
  appointmentTime: string,
  patientName: string,
  age: string,
  gender: string,
  phoneNumber: string,
  email: string,
  message: string,
};

export default function Appointment() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post("https://hb-medical-server.vercel.app/appointment", data)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
  };


  return (
    <div className="lg:w-1/2 bg-slate-100 mx-auto my-10 p-10 rounded">
        <h3 className="lg:text-3xl text-xl text-center mb-10">Book Your Appointment Here</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Department</p>
            <select className="w-full p-2 rounded"  {...register("department" ,{ required: true })}>
                <option value="Obstretrics & Gynecology">Obstretrics & Gynecology</option>
                <option value="Heart Disease Medicine">Heart Disease Medicine</option>
                <option value="Chest Disease">Chest Disease</option>
                <option value="Children">Children</option>
                <option value="Sonology">Sonology</option>
                <option value="Dental">Dental</option>
                <option value="Pathology">Pathology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Rediology & Imaging">Rediology & Imaging</option>
            </select>
            <br />
            <br />
            <p>Doctor Name</p>
            <input className="w-full p-2 rounded" {...register("doctorName" ,{ required: true })} />
            <br />
            <br />
            <p>Appointment Date</p>
            <input className="w-full p-2 rounded" {...register("appointmentDate" ,{ required: true })} />
            <br />
            <br />
            <p>Appointment Time</p>
            <input className="w-full p-2 rounded" {...register("appointmentTime" ,{ required: true })} />
            <br />
            <br />
            <p>Patient Name</p>
            <input className="w-full p-2 rounded" {...register("patientName" ,{ required: true })} />
            <br />
            <br />
            <p>Age</p>
            <input className="w-full p-2 rounded" {...register("age" ,{ required: true })} />
            <br />
            <br />

            <select className="w-full p-2 rounded"  {...register("gender" ,{ required: true })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <br />
            <br />
            <p>Phone Number</p>
            <input className="w-full p-2 rounded" {...register("phoneNumber" ,{ required: true })} />
            <br />
            <br />
            <p>Email</p>
            <input className="w-full p-2 rounded" {...register("email" ,{ required: true })} />
            <br />
            <br />
            <p>Message</p>
            <textarea className="w-full p-2 rounded" {...register("message" ,{ required: true })} />
            <br />
            <br />

            <button className="w-full p-2 rounded bg-blue-700 text-white" type="submit">Confirm Book</button>
        </form>
    </div>
  );
}