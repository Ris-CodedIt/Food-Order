import { createContext, useReducer } from "react"

const CartContext = createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
})

const cartReducer = (state,action)=>{
    if(action.type === "ADD_ITEM"){
        const  existing = state.items.findIndex((item)=> item.id === action.item.id)

        const updatedItems = [...state.items]
        if(existing > -1){
            const exItem = state.items[existing]
            const updatedItem ={
                ...exItem,
                quantity : exItem.quantity + 1
            }

           updatedItems[existing]=updatedItem
            
        }else{
            updatedItems.push({...action.item, quantity: 1})
        }

        return {...state, items:updatedItems}
    }



    if(action.type === "REMOVE_ITEM"){
        const  existing = state.items.findIndex((item)=> item.id === action.id)
        const exItem = state.items[existing]

        const updatedItems = [...state.items]
        if(exItem.quantity ===1){
            updatedItems.splice(existing,1)
        }else{
            const updatedItem = {...exItem, quantity: exItem.quantity-1}
            updatedItems[existing] = updatedItem 
        }
        return {...state, items:updatedItems}
    }


    return state
}


export const CartContextProvider=({children})=>{
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items:[]});

    const  addItem =(item)=>{
 
        dispatchCartAction({type:'ADD_ITEM', item:item})
    }
    const  removeItem =(id)=>{
        dispatchCartAction({type:'REMOVE_ITEM', id:id})
    }

    const cartContext ={
        items: cart.items,
        addItem,
        removeItem
    }
    
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext