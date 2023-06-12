import CareScale from "./CareScale"
import '../styles/PlantItem.scss'

function PlantItem({id, cover, name, water, light, price}) {
    return (
        <li className="np-plant-item">
            <span className="np-plant-item__price">{price}€</span>
            <img className="np-plant-item__cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li> 
    )
}

export default PlantItem