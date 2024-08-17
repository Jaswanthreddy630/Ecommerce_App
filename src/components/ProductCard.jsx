import { useCart } from "./cart-context"
import { findProductInCart } from "./findProductInCart";
import {useNavigate} from 'react-router-dom'
export const ProductCard=({product})=>{
     const navigate=useNavigate();
    const {cart,cartDispatch}=useCart();
    const isProductInCart=findProductInCart(cart,product.id);
    const onCartClick=(product)=>{
        !isProductInCart?
        cartDispatch({
            type:'ADD_TO_CART',
            payload:{product}
        }):navigate('/cart')
    }
    return(
        <>
        <div className="card card-vertical d-flex direction-column relative shadow">
     <div className="card-image-container">
          <img className="card-image" src={product.images[0]} alt="shoes"/>
     </div>
     <div className="card-details">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
               <p className="card-price">
                  {product.price *10}
               	  <span className="price-strike-through">{product.price *15}</span>
                  <span className="discount">(33% OFF)</span>
               </p>
          </div>
          <div className="cta-btn">
               <button onClick={()=>onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
               <span class="material-icons-outlined text-3xl hover:cursor-pointer">

                    {
                         isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                    }
            </span>
                    {isProductInCart ? 'GO TO CART' : 'ADD TO CART'}
                  
               </button>
               <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
               <span class="material-icons-outlined text-3xl hover:cursor-pointer">
            favorite
            </span>
                 Add To WishList
               </button>
          </div>
     </div>
</div>
        </>
    )
}