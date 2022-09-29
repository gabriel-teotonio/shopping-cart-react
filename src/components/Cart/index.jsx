import React from 'react'
import './style.css'

export function Cart({cartItens}) {
  return (
    <div className='cart-itens'>
        {cartItens.map(item => (
            <div key={item.id} className='cart-item'>
              <h3>{item.name}</h3>
              <p>qtd: {item.qtd}</p>
            </div>
        ))}
    </div>
  )
}
