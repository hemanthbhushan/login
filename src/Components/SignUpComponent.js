import React from "react";
import "./SignUpStyle.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpComponent = () => {

  const formik = useFormik({
    initialValues: {
      userName: "",
      email:"",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
        

       

    
      
    },
})
  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Spotify</div>

      <form className="p-3 mt-3" onSubmit={formik.handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            id="userName"
            name="userName"
            placeholder="Username"
            type="text"
            {...formik.getFieldProps("userName")}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>

          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>

          <input
            id="pwd"
            name="Password"
            placeholder="Password"
            type="Password"
            {...formik.getFieldProps("password")}
          />
        </div>
        <button type="submit" className="btn mt-3">
         Sign Up
        </button>
      </form>

      <div>
      </div>
    </div>

  )
}

export default SignUpComponent