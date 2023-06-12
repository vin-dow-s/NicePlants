import '../styles/Cart.scss'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(() => {
        document.title = `Nice Plants: ${total}€ d'achats`
    }, [total])
    const totalItems = cart.reduce((total, { amount }) => total + amount, 0);

    return isOpen ? (
        <div className="np-cart">
            <button className='np-cart__toggle-button close-cart' onClick={() => setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(255,255,255,1)"></path></svg></button>
            {cart.length > 0 ? (
                <div>
                    <h2 className="np-cart__title">Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {amount} x {name} ({price * amount}€)
                            </div>
                        ))}
                    </ul>
                    <h3 className='np-cart__total'>Total : {total}€</h3>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button className='np-cart__emptyCart-button' onClick={() => updateCart([])}>Vider le panier<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></button>
                    </div>
                </div>
            ) : (
                <div className='np-cart__message'>Votre panier est vide</div>
            )}
            </div>
        ) : (
            <div className="np-cart--closed">
                <button className='np-cart__toggle-button open-cart' onClick={() => setIsOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg></button>
                {totalItems > 0 && 
                    (<span className='np-cart--closed__count'>{totalItems}</span>)
                }
            </div>
        )
}

export default Cart