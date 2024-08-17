import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import { useLogin } from './login-context';
export const Navbar=()=>{
    const navigate=useNavigate();
    const[isAccountDropDownOpen,setIsAccountDropDownOpen]=useState(false);
    const {token,loginDispatch} =useLogin();
    const onLoginClick=()=>{
        if(token?.access_token){
        navigate('/auth/login');
        }
        else{
            loginDispatch({
                type:'LOGOUT'
            })
            navigate('/auth/login')
        }

    }
    return(
        <header className="flex bg-neutral-400 py-4 px-6 text-gray-950">
            <div>
                <h1 className="text-4xl hover:cursor-pointer" onClick={()=>navigate('/')} >Shop It</h1>
            </div>
            <nav className="ml-auto flex gap-8">
            <span class="material-icons-outlined text-3xl hover:cursor-pointer">
            favorite
            </span>
            <span class="material-icons-outlined text-3xl hover:cursor-pointer" onClick={()=>navigate('/cart')}>
            shopping_cart   
            </span>
            <div className='relative'>
            <span onClick={()=>setIsAccountDropDownOpen(!isAccountDropDownOpen)}class="material-icons-outlined text-3xl hover:cursor-pointer">
            account_circle
            </span>
            {
                isAccountDropDownOpen && <div className='absolute bg-slate-100'>
                    <button onClick={onLoginClick}>
                        {
                            token?.access_token ? 'Logout' : 'Login'
                        }
                    </button>
                </div>
            }
            </div>
            </nav>
        </header>
    )
}