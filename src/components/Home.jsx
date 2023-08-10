import { useEffect, useState } from "react"
import Card from "./Card"
import  Axios  from "axios"


const API="https://dummyjson.com/products"

const Home = () => {
const [products,Setproducts]=useState([])

const fetchData=async()=>{
await Axios.get(API)
.then((res)=>{
    console.log(res.data.products)
    Setproducts(res.data.products)
    localStorage.setItem("mydata",JSON.stringify(res.data.products))

}).catch((err)=>console.log(err))


}

const verify=()=>{
    if(localStorage.mydata){
        const mydata =JSON.parse(localStorage.getItem('mydata'))
        Setproducts(mydata)
    }
    else{
        fetchData()
    }
}


useEffect(()=>{
verify()
},[])
  return (
<section className="w-full h-scren bg-slate-300 flex items-center flex-wrap justify-center overflow-scroll-y">


{products && products .map((ele)=> <Card  key={ele.id} thumbnail={ele.thumbnail} id={ele.id} brand={ele.brand} price={ele.price} title={ele.title} rating={ele.rating} stock={ele.stock}/>)}
</section>
  )
}

export default Home