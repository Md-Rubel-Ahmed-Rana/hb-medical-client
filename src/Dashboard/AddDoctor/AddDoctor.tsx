import { useForm, SubmitHandler } from "react-hook-form";
import swal from "sweetalert"

type Inputs = {
  doctorName: string,
  age: string,
  joiningDate: string,
  gender: string,
  phoneNumber: string,
  email: string
  image: string
};



function AddDoctor() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
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
        image: imageUrl
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

                <p>Age</p>
                <input className="w-full p-2 rounded" {...register("age" ,{ required: true })} />
                <br />
                <br />

                <p>Joining Date</p>
                <input className="w-full p-2 rounded" {...register("joiningDate" ,{ required: true })} />
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
                <input className="w-full p-2 rounded bg-white" {...register("email" ,{ required: true })} />
                <br />
                <br />
                <p>Upload Photo</p>
                <input className="w-full p-2 rounded bg-white" type="file" {...register("image" ,{ required: true })} />
                <br />
                <br />

                <button className="w-full p-2 rounded bg-blue-700 text-white" type="submit">Add Doctor</button>
            </form>
        </div>
  );
}

export default AddDoctor