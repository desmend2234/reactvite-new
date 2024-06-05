import Button from '../../ui/Button.jsx'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js'

function UpdateItemQuantity({ id, currentQuantity }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-4 text-xl md:gap-5">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(id))}
            >
                -
            </Button>
            <span className="text-base font-semibold">{currentQuantity}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(id))}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
