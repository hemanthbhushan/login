import React,{useState,useEffect} from 'react'
import  './LoginStyle.css';
import {useFormik } from "formik";
import * as Yup from "yup";
import details from './details.json'
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login,setLogin] = useState(false)
    const [text,setText] = useState("");



    const formik = useFormik({
        initialValues: {
          userName:"",
          password:""
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: async (values, { resetForm }) => {

          const check = details.find((val)=>{
            return (val.userName=== values.userName && val.password===values.password)
          })
          if(check){
            setText("Logged In")
          }else{
            setText("in valid userName or Pasword or Need to Signup")
          }
           
        //    details?.map((val)=>{
            
        //     if(val.userName=== values.userName && val.password===values.password){
        //                 setText("Logged In")
        //                 console.log('checkkk', checkkk)
        //              }else{
        //               setText("in valid userName or Pasword or Need to Signup")
        //              }
        // })
        },
      });
    return (
    <div className="wrapper">
        <div className="logo">
      
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
            Spotify
        </div>
        
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
                {/* <input type="text" name="userName" id="userName" placeholder="Username"/> */}
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
            <button type="submit" className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <Link to="/signup">Sign up</Link>
        </div>

        <div>
           
              <div className="text-center mt-4 name">
           {text}
        </div>
           
        </div>
      
    </div>

  )
}

export default LoginComponent