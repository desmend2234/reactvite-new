import { useDispatch } from 'react-redux'
import Button from '../../ui/Button.jsx'
import { deleteItem } from './cartSlice.js'

function DeleteItem({ id }) {
    const dispatch = useDispatch()
    return (
        <Button type="secondary" onClick={() => dispatch(deleteItem(id))}>
            Delete
        </Button>
    )
}

export default DeleteItem
