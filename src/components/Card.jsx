import { useContext } from 'react';
import './Card.css'
import { ThemeContext } from '../context/theme';
function Card ({item}){
    const theme = useContext(ThemeContext)

    return(
        <>
        <div key={item.id} className={`catalog-card-${theme.currentTheme}`}>
            <div className={`catalog-card-img-${theme.currentTheme}`}>
                <img src={item.img} alt="" />
            </div>
            <h4 className={`catalog-card-name-${theme.currentTheme}`}>{item.name}</h4>
            <p className={`catalog-card-description-${theme.currentTheme}`}>{item.description} </p>
            <hr />
            <p className={`catalog-card-price-${theme.currentTheme}`}>Цена: {item.price} рублей </p>
            <p className={`catalog-card-quantity-${theme.currentTheme}`}>Количество: {item.quantity} </p>
        </div>
        </>
    )
}

export default Card;