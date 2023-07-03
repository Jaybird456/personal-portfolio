import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const Contact = () => {
    const schema = yup.object({
        name: yup.string().required("Name Is Required"),
        email: yup.string().email("Please Enter A Valid Email").required("Email Is Required"),
        message: yup.string().required("Message Is Required")
    })

    const { register, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      })

  return (
    <div name="contact">
      <div className=" flex justify-center items-center p-4 lg:h-screen">
          <form className="flex flex-col" action="https://getform.io/f/27006d86-4de7-4356-a1fd-2ffd41c55ac6" 
                 method="POST">
            <div className="p-4 text-center mb-0">
              <h1 className="text-6xl">Contact</h1>
              <p className="text-light-white text-lg">Want to get in touch with me? Fill out the form below</p>
            </div>
              <input className="focus:outline-0 focus:border-red-600 bg-light-black text-red-600 border-solid border-2 border-light-white p-2 m-2" type="text"  placeholder="Name:*" {...register("name")} />
              <p className="text-red-600 p-2">{errors.name?.message}</p>
              <input className="focus:outline-0 focus:border-red-600 bg-light-black text-red-600 border-solid border-2 border-light-white p-2 m-2" type="text" placeholder="Enter Email:*" {...register("email")} />
              <p className="text-red-600 p-2">{errors.email?.message}</p>
              <textarea className="focus:outline-0 focus:border-red-600 bg-light-black text-red-600 border-solid border-2 border-light-white p-2 m-2" name="message" id="" cols="30" rows="10" placeholder="Your Message*" {...register("message")}></textarea>
              <p className="text-red-600 p-2">{errors.message?.message}</p>
              <input className="border-solid border-2 border-red-600 rounded-full text-light-white 
                        py-2 px-3 text-lg hover:border-light-white m-2" type="submit" />
          </form>
        </div>
    </div>
  )
}

export default Contact