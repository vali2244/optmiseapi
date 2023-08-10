/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"

const Card = ({thumbnail,id,brand,price,title,rating,stock}) => {
  return (
   <Link to={`/products/${id}`} className="w-96  flex-col mx-4 my-5 flex  bg-white shadow-2xl
   rounded-2xl items-center justify-center">
<img className="w-full h-44  rounded-xl  object-cover" src={thumbnail} alt="" />
<span>{id}</span>
<span>{brand}</span>
<span>{price}</span>
<span>{title}</span>
<span>{rating}</span>
<span>{stock}</span>
   </Link>
  )
}

export default Card