import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const Products = () => {

  const {id}=useParams()
  const [products,Setproducts]=useState({})

const getMydata=()=>{
const mydata=JSON.parse(localStorage.getItem('mydata'))
console.log(mydata[id-1])
Setproducts(mydata[id-1])
}

useEffect(()=>{
getMydata()
},[])

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-1/2  flex rounded-xl shadow-xl ">
<div className="w-1/2 h-80 rounded-lg ">
    <img className="w-full h-80 rounded-lg object-cover" src={products.thumbnail} alt="" />

</div>
<div className="w-1/2  h-80  rounded-lg flex flex-col  items-start  justify-evenly">
    <span className="flex flex-col items-center justify-evenly gap-6 ml-7 text-xl font-bold ">
    <span>title:{products.title}</span>
    <span>id:{products.id}</span>
    <span>brand:{products.brand}</span>
    <span>price:{products.price}</span>
    <span>rating:{products.rating}</span>
    <span>stock:{products.stock}</span>
    </span>
</div>

        </div>
        <Link to='/' className=" flex items-center justify-center mt-7  text-2xl font-bold text-red-500 w-36 h-14 rounded-lg  bg-blue-500">Back</Link>
    </section>
  )
}

export default Products