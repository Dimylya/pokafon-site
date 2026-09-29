import './Card.css'
function Card ({item}){

    return(
        <>
        <div key={item.id} className="catalog-card">
            <div className="catalog-card-img">
                <img src={item.img} alt="" />
            </div>
            <h4 className="catalog-card-name">{item.name}</h4>
            <p className="catalog-card-description">{item.description} </p>
            <hr />
            <p className="catalog-card-price">Цена: {item.price} рублей </p>
            <p className="catalog-card-quantity">Количество: {item.quantity} </p>
        </div>
        </>
    )
}

export default Card;