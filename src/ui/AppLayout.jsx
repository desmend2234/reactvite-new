import Loader from './Loader.jsx'
import Navbar from './Navbar.jsx'
// import CartOverview from '../features/cart/CartOverview.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './footer.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getAllProduct, handleCategory } from '../services/apiProduct.js'

function AppLayout() {
    const [loading, setLoading] = useState(false)
    const [categoryList, setCategoryList] = useState()

    // useEffect(() => {
    //     axios.interceptors.request.use(
    //         function (config) {
    //             // Do something before request is sent
    //             setLoading(true)
    //             return config
    //         },
    //         function (error) {
    //             // Do something with request error
    //             return Promise.reject(error)
    //         }
    //     )

    //     // Add a response interceptor
    //     axios.interceptors.response.use(
    //         function (response) {
    //             // Any status code that lie within the range of 2xx cause this function to trigger
    //             // Do something with response data
    //             setLoading(false)
    //             return response
    //         },
    //         function (error) {
    //             // Any status codes that falls outside the range of 2xx cause this function to trigger
    //             // Do something with response error
    //             return Promise.reject(error)
    //         }
    //     )
    // }, [])

    const { data: allCategory, isLoading: allCategoryLoading } = useQuery({
        queryKey: ['all'],
        queryFn: getAllProduct,
        onSuccess: (allCategory) => {
            if (allCategory) {
                handleCategoryAndUpdate(allCategory)
            }
        },
    })

    const handleCategoryAndUpdate = async (allCategory) => {
        try {
            const updatedList = await handleCategory(allCategory)
            setCategoryList(updatedList)
        } catch (error) {
            console.error('Error updating categoryList:', error)
        }
    }

    return (
        <div className="bg-white-50  grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar allCategory={allCategory} categoryList={categoryList} />
            <Loader loading={allCategoryLoading} />
            <Outlet context={{ categoryList, allCategory }} />
            <Footer />
        </div>
    )
}

export default AppLayout
