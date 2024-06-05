import LinkButton from '../../ui/LinkButton.jsx'

function EmptyCart() {
    return (
        <div className="min-h-screen">
            <LinkButton to="/menu/all">&larr; Back to menu</LinkButton>

            <p className="py-4 text-lg font-semibold">
                Your cart is still empty. Start adding some items :)
            </p>
        </div>
    )
}

export default EmptyCart
