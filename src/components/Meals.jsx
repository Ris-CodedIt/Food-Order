import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";


const Meals = () => {
    const [meals, setMeals] = useState([])


    useEffect(()=>{
        const fetchMeales = async()=>{
            // let response = null;
            // try{
            // response = await fetch("http:localhost:3000/meals") 
            // }catch(e){
              
            // }
            // if (!response.ok){
            //     // ....
            // }
        const response =  await fetch("http://localhost:3000/meals") 
        const resData =  await response.json()
        setMeals(resData)
    }
        fetchMeales();
    },[])
  
  return (
    <ul id="meals">
        {meals.map(meal => <MealItem key={meal.id} meal={meal}/> )}
       
    </ul>
  )
}

export default Meals