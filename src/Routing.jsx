import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"

const Routing = () => {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:id" element={<Products/>}/>

    
</Routes>
</BrowserRouter>
</>
  )
}

export default Routing