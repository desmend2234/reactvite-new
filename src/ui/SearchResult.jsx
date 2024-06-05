import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams, Link, useParams } from 'react-router-dom'
import LinkButton from './LinkButton'

function SearchResult() {
    const [product, setProduct] = useState({})
    const { query } = useParams()

    const getSearchProduct = async (query) => {
        const res = await axios.get(
            'https://ec-course-api.hexschool.io/v2/api/desmend-react/products'
        )
        const result = res.data.products.filter((item) => {
            return item.title == query || item.category == query
        })
        console.log(result)
        setProduct(result)
    }
    useEffect(() => {
        getSearchProduct(query)
        console.log(query)
        console.log(product)
    }, [query])

    return (
        <div className="mx-auto">
            <h2 className="mb-1 mt-6 px-6 text-start text-xl font-semibold">
                {`${query}'s search result:`}
            </h2>
            {!product.length ? (
                <div>
                    <h4 className="my-6 px-4 text-base">
                        很抱歉，無「{query}
                        」相關資料。請使用其他的關鍵字再試一次。
                    </h4>{' '}
                    <LinkButton to="-1">&larr; Go back</LinkButton>
                </div>
            ) : (
                product.map((item) => {
                    return (
                        <div className="flex" key={item.id}>
                            <div className="mx-4 my-5 w-full max-w-sm rounded-lg border border-stone-200 bg-white ">
                                <Link to={`/menu/productDetail/${item.id}`}>
                                    <img
                                        src={item.imageUrl}
                                        alt="search image"
                                    />
                                    <div className="px-5 pb-5">
                                        <h2 className="py-2 text-3xl font-semibold tracking-tight text-gray-900">
                                            {item.title}
                                        </h2>

                                        <div className="mb-5 mt-2.5 flex items-center">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                <svg
                                                    className="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="h-4 w-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="h-4 w-4 text-gray-200 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 ">
                                                5.0
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 ">
                                                {item.price}
                                            </span>
                                            <Link
                                                href="#"
                                                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                                            >
                                                Add to cart
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            )}
            {}
        </div>
    )
}
export default SearchResult
