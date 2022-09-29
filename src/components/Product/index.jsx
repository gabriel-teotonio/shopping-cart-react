import './style.css'

export const Product = ({name, urlImg, handleAddToCart, idGame, cartItens,game}) => {
    const itemCart = cartItens.find(item => item.id === idGame)
    return (
        <div className='product-item'>
            <img src={urlImg} alt={name} />
            <h2>{name}</h2>
            <button onClick={() => handleAddToCart(game)}>Add Cart</button>
            <div className='count'>
                {itemCart?.qtd ? itemCart?.qtd : 0}
            </div>
        </div>
    )
}
