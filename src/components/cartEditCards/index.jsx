import { useState } from 'react';
import '../../style/Takk.css'
import CartEditCard from './cartEditCard';

const CartEditCards = () => {
    const [cartEditCards, setCartEditCards] = useState([
        {id:1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml'},
        {id:2, productName: 'TK-2', productClass: 'Class-2', productPrice: 5500, capacity: '50ml'},
        {id:3, productName: 'TK-3', productClass: 'Class-2', productPrice: 5300, capacity: '100ml'}
    ])

    const delCard = (id) => {
        setCartEditCards(cartEditCards.filter(c => c.id !== id))
    }

    return (
        <div>
            {cartEditCards.map((c, index) => (
                <div key={c.id}>                    
                    <CartEditCard
                        key    = {c.id}
                        detail = {c}
                        onDel  = {() => delCard(c.id)}
                        order  = {index + 1}
                    />
                    {index < cartEditCards.length - 1 && <hr/>}
                </div>
            ))}
        </div>
    )
}

export default CartEditCards;