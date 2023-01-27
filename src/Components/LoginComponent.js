import React,{useState,useEffect} from 'react'
import  './LoginStyle.css';
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import details from './details.json'

const LoginComponent = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login,setLogin] = useState(false)



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
           
           setPassword(values.password);
           setUserName(values.userName);
           details?.map((val)=>{
            console.log(val.userName,val.password,"chekkkk")
            
            if(val.userName=== userName && val.password===password){
                        setLogin(true)
                     }
            console.log(val.userName === values.userName && val.password===values.password)

        })
        },
      });
    return (
    <div className="wrapper">
        <div className="logo">
      
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
            Twitter
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
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>

        <div>
            { 
            login? <>
             <h3>Logged in</h3>
            </>:
                //   <>
                // <h3>check userName or password</h3>
                //  </> 
                 ""
    
            }
        </div>
      
    </div>

  )
}

export default LoginComponent