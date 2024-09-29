import { currencyFmt } from "../util/formating"
import Button from "./UI/Button"
import CartContext from "../context/CartContext"
import { useContext } from "react"


const MealItem = ({meal}) => {
    const cartContx = useContext(CartContext)
    const HandleAdd =()=>{
        cartContx.addItem(meal)
    }
  return (
    <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFmt.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={HandleAdd}>Add to Cart</Button>
            </p>
        </article>
    </li>
  )
}

export default MealItem