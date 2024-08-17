import { Navbar } from "./Navbar"
import { useEffect,useState} from "react"
import { getAllProducts } from "../apis/getAllProducts"
import { getAllCategories } from "../apis/getAllCategoris"
import { getProductsByCategories } from "../apis/getProductsByCategories"
import { ProductCard } from "./ProductCard"
import { useCart } from "./cart-context"
export const Home=()=>{
    const [products,setProducts]=useState([]);
    const [categories,setCategories]=useState([]);
    const [selectedCategories,setSelectedCategories]=useState("All");
    const {cart}=useCart();
    console.log(cart);
    useEffect(()=>{
        (async ()=>{
            const products=await getAllProducts();
            const categories=await getAllCategories();
            const updatedCategories=[...categories,{id:'1a',name:'All'}]
            setProducts(products);
            setCategories(updatedCategories);
        })()
    },[]);

    const onCategoryClick=(category)=>{
        setSelectedCategories(category);
    }
    const filterByCategories=getProductsByCategories(products,selectedCategories);
    return(
        <>
        <Navbar/>
        <main className="flex flex-col flex-wrap gap-8 justify-center pt-8">
            <div className="flex gap-8 justify-center ">
                {
                    categories.length > 0 && categories.map(category => <div className="bg-neutral-400 font-semibold rounded-full p-2 hover:cursor-pointer" onClick={()=>onCategoryClick(category.name)}>{category.name}</div>)
                }
            </div>
            <div className="flex flex-wrap gap-8 justify-center pt-8">
            {
                filterByCategories.length > 0 ? filterByCategories.map(product => <ProductCard key={product.id} product={product}/>) :
                <h2>No Products Found . Please try with another category</h2>
            }
            </div>
        </main>
        </>
    )
}