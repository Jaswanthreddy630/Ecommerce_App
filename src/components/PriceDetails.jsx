import { useNavigate } from "react-router-dom";
import { useCart } from "./cart-context"
import { getTotalCartAmount } from "./getTotalCartAmount";

export const PriceDetails=()=>{
    const {cart}=useCart();
    const navigate=useNavigate();
    const totalCartAmount=getTotalCartAmount(cart);
    const deliveryCharge=100;
    const loadScript=(src)=>{
        return new Promise(resolve=>{
            const script=document.createElement("script");
            script.src=src;
            script.onload=()=>resolve(true);
            script.onerror=()=>resolve(false);
            document.body.appendChild(script);
        });
    };
    const displayRazorpay=async()=>{
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        const options={
            key:"rzp_test_KadU0GKl1nHSGu",
            amount:(totalCartAmount+deliveryCharge)*1000,
            currency:"INR",
            name:"Shop IT",
            description:"Thank You for shopping",
            image:"https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",
            handler:({payment_id})=>{
                navigate("/")
            }
        }
        const paymentObject=new window.Razorpay(options);
        paymentObject.open();
    }
    return(
        <div className="w-[400px]  p-4 ">
            <p className="text-2xl p-2 border-b">Price Details</p>
            <div className="flex flex-col gap-5 border-b p-2">
                <div className="flex">
                    <p>items</p>
                    <p className="ml-auto">{cart.length}</p>
                </div>
                <div className="flex">
                    <p>Delivery Charges</p>
                    <p className="ml-auto">RS 100</p>
                </div>
            </div>
            <div className="flex border-b p-2" >
                <p>Total Amount</p>
                <p className="ml-auto">{totalCartAmount*10+100}</p>
            </div>
            <div className="p-2">
            <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={()=>displayRazorpay()}>PLACE ORDER</button>
            </div>
        </div>
    )
}