import { Login } from "./Login"
import { Navbar } from "./Navbar"
export const AuthLogin=()=>{
    return(
        <>
        <Navbar/>
        <main className="flex justify-center items-center mt-20">
        <Login/>
        </main>
        </>
    )
}