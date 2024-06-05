import { getProductItem } from '../../services/apiProduct.js'
import Button from '../../ui/Button.jsx'
import { formatCurrency } from '../../utils/helper.jsx'
import DeleteItem from './DeleteItem.jsx'
import UpdateItemQuantity from './UpdateItemQuantity.jsx'

function CartItem({ item }) {
    const { price, quantity, id, title } = item

    return (
        <li className="mx-10 py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 text-xl font-semibold sm:mb-0">
                {quantity}&times; {title}
            </p>
            <div className="flex items-center justify-evenly sm:gap-6">
                <p className="text-xl font-bold sm:gap-6">
                    {formatCurrency(price * quantity)}
                </p>
                <UpdateItemQuantity id={id} currentQuantity={quantity} />
                <DeleteItem id={id} />
            </div>
        </li>
    )
}

export default CartItem
