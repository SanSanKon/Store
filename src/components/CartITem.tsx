import { FC } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem:FC<CartItemProps> = ({id, quantity}) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    
    return (
        <Stack direction='horizontal' gap={2}>
            <img
                src={item.imgUrl}
                style={{ objectFit: 'cover', height: '75px', width: '125px' }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{' '}
                    {quantity > 1 && (
                        <span className='text-muted' style={{ fontSize: '.65rem' }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className='text-muted' style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}                    
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem