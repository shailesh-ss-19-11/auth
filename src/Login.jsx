import axios from 'axios';
import React from 'react';
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const getEmail=(e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const getPassword=(e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
    const loggingin=(e)=>{
        e.preventDefault();
        console.log(email,password)
        axios.post("https://reqres.in/api/login",{email:email,password:password}).then((resp)=>{
            console.log(resp)
            if(resp.status >= 200){
                localStorage.setItem("token",resp.data.token)
            }
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        })
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={loggingin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getEmail}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={getPassword}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
