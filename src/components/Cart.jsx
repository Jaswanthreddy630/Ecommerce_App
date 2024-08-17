import {Navbar} from './Navbar'
import { useCart } from './cart-context'
import { HorizontalCart } from './HorizontalCart'
import { PriceDetails } from './PriceDetails'
import { useNavigate } from 'react-router-dom'
export const Cart=()=>{
    const {cart}=useCart();
    const navigate=useNavigate();
    return(
        <>
        <Navbar/>
        <main className='flex flex-col pt-6 items-center '>
            <h2 className='text-3xl'>My Cart</h2>
            {
                cart.length > 0?(
            <>
            <div className='flex gap-9'>
            <div className='pt-4 flex flex-col gap-4'>
            {
                cart.length > 0 ? cart.map(product => <HorizontalCart product={product} key={product.id} />) :<p>Cart is Empty</p>
            }
            </div>
            <PriceDetails/>
            </div>
            </>
                ):<button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={()=>navigate("/")}>Add Items to the cart</button>
            }
        </main>
        </>
    )
}