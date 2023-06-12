import { useState } from "react"
import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import Categories from "./Categories"
import '../styles/ShoppingList.scss'

function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}])
            cart = cart + 1;
        } else {
            updateCart([...cart, {name, price, amount: 1}])
            cart = cart + 1;
        }
        localStorage.setItem(name, price)
    }

    return (
        <div className="np-shopping-list">
            <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
            <ul className="np-plant-list">
                { plantList.map(({ id, cover, name, water, light, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
                            <button className="np-plant-list__add-button" onClick={() => addToCart(name, price)}>Ajouter au panier <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg></button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList