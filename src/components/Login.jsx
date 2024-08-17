import {useLogin} from "./login-context"
import { userLogin } from "./auth";
import { useNavigate } from "react-router-dom";
export const Login=()=>{

    const {loginDispatch,email,password}=useLogin();
    const navigate=useNavigate();
    const onFormSubmit=async (e)=>{
        e.preventDefault();
        const data=await userLogin(email,password);
        loginDispatch({
            type:'TOKEN',
            payload:{
                token:data
            }
        })
        if(data.access_token){
            navigate("/")
        }
    }
    const onEmailChange=(e)=>{
        loginDispatch({
            type:'EMAIL',
            payload:{
                value:e.target.value
            }
        })
    }
    const onPasswordChange=(e)=>{
        loginDispatch({
            type:'PASSWORD',
            payload:{
                value:e.target.value
            }
        })
    }
    return(
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-5">
            <h2 className="flex justify-center text-2xl">Login</h2>
            <div className="flex flex-col gap-2">
                <span>Email *</span>
                <input className="border-b-2" onChange={onEmailChange}type="email" required placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col gap-2">
                <span>Password *</span>
                <input className="border-b-2" onChange={onPasswordChange}type="password" required placeholder="Enter Your Password" />
            </div>
            <div>
            <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Login</button>
            </div>
        </form>
    )
}