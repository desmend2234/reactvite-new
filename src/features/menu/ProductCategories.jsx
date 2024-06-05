import { useOutletContext, useParams } from 'react-router-dom'
import MenuItem from './MenuItem'

function ProductCategories() {
    const { categories: currentCategory } = useParams()
    const { allCategory } = useOutletContext()

    return (
        <div className="mx-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategory?.map((item) => {
                return item.category === currentCategory ? (
                    <MenuItem item={item} key={item.id} />
                ) : currentCategory === 'all' ? (
                    <MenuItem item={item} key={item.id} />
                ) : (
                    ''
                )
            })}
        </div>
    )
}

export default ProductCategories
