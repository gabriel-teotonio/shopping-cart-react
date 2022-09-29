import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { Product } from './components/Product'
import { products } from './Data/products'

function App() {
   const [cartItens, setCartItens] = useState([])

  const handleAddToCart = (game) => {
    const CopyCartItems = [...cartItens]
    const item = CopyCartItems.find(item => item.id === game.id )
    if(item){
      setCartItens(cartItens.map(item => item.id === game.id ? {...item, qtd:item.qtd + 1} : item))
    }
    else{
      setCartItens([...cartItens,{...game, qtd:1}])
    }

  }
    return (
      <div>
        <Cart cartItens={cartItens}/>
        <div className='product-list'>
        {products.map(game => (
            <Product 
              game={game}
              key={game.id} 
              name={game.name}
              urlImg={game.urlImg}
              handleAddToCart={handleAddToCart}
              idGame={game.id}
              cartItens={cartItens}
            />
        ))}
        </div>
      </div>
    )
}

export default App