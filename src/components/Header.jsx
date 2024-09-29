import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../context/CartContext"

const Header = () => {

  const cartCntx = useContext(CartContext)

  const totalCartItems = cartCntx.items.reduce((total, item)=>{ 
    return total + item.quantity
  }, 0)
  return (
    <header id="main-header">
        <div id="title">
            <img src={logo} alt="Quick Bytes logo" />
            <h1>Quick Bytes</h1>
        </div>
        <nav>
           <Button textOnly={true}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}

export default Header