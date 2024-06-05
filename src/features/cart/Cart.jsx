import LinkButton from '../../ui/LinkButton.jsx'
import Button from '../../ui/Button.jsx'
import CartItem from './CartItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart.jsx'
import { clearCart, getCart } from './cartSlice.js'
import { getCartData } from '../../services/apiProduct.js'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

function Cart() {
    const username = useSelector((state) => state.user.username)
    const cart = useSelector(getCart)
    console.log(cart)

    const cartData = useLoaderData()
    // const x = useQuery({ queryKey: ['cart'], queryFn: getCartData })

    // console.log(x)

    const dispatch = useDispatch()
    if (!cart.length) return <EmptyCart />

    return (
        <div className="mx-28 max-h-screen py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold capitalize">
                Your cart, {username}
            </h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.id}></CartItem>
                ))}
            </ul>
            <div className="mx-28 mt-6 flex space-x-2">
                <Button to="/order/new" type="primary">
                    Order
                </Button>
                <Button
                    type="secondary"
                    onClick={() => {
                        return dispatch(clearCart())
                    }}
                >
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart

export async function loader() {
    const cartData = await getCartData()
    return cartData
}
