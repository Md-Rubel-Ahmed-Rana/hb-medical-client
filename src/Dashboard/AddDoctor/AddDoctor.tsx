import { useForm, SubmitHandler } from "react-hook-form";
import swal from "sweetalert"

type Inputs = {
  doctorName: string,
  age: string,
  joiningDate: string,
  gender: string,
  phoneNumber: string,
  email: string
  image: string,
  department: string
};



function AddDoctor() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    const apiKey = process.env.REACT_APP_IMGBB_KEY
    const image = data.image[0];
    const formaData = new FormData();
    formaData.append("image", image)

    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formaData
    })
    .then((res) => res.json())
    .then((Recieveddata) => {
      const imageUrl = Recieveddata.data.url
      const newDoctor = {
        doctorName: data.doctorName,
        age: data.age,
        joiningDate: data.joiningDate,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
        email: data.email,
        image: imageUrl,
        department: data.department
      }
     console.log(newDoctor);
      swal("Good Job!", "New Doctor Added", "success")
    })
    .catch((err) => console.log(err))

    

  }


  return (
        <div className="bg-gray-100 p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Doctor Name</p>
                <input className="w-full p-2 rounded" {...register("doctorName" ,{ required: true })} />
                <br />
                <br />

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
                <option value="Rediology & Imaging">Orthopedics</option>
            </select>
                <br />
                <br />

                <p>Age</p>
                <input className="w-full p-2 rounded" {...register("age" ,{ required: true })} />
                <br />
                <br />

                <p>Joining Date</p>
                <input className="w-full p-2 rounded" {...register("joiningDate" ,{ required: true })} />
                <br />
                <br />

                <p>Gender</p>
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
                <input className="w-full p-2 rounded bg-white" {...register("email" ,{ required: true })} />
                <br />
                <br />
                <p>Upload Photo</p>
                <input className="w-full p-2 rounded bg-white" type="file" {...register("image")} />
                <br />
                <br />

                <button className="w-full p-2 rounded bg-blue-700 text-white" type="submit">Add Doctor</button>
            </form>
        </div>
  );
}

export default AddDoctor