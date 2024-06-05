import { Link, useOutletContext } from 'react-router-dom'

function SideTabs() {
    const { categoryList, allCategory } = useOutletContext()
    return (
        <Link>
            <div className="border-b border-gray-200 px-6 text-center text-sm font-semibold text-stone-500">
                <ul className="-mb-px flex flex-row flex-wrap">
                    {categoryList?.map((cate) => {
                        return (
                            <li className="me-2" key={cate}>
                                <Link
                                    to={`/menu/${cate}`}
                                    className="inline-block rounded-t-lg border-b-2 border-transparent p-4 text-base hover:border-stone-300 hover:bg-stone-50 hover:text-stone-600"
                                >
                                    {cate}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    )
}

export default SideTabs
