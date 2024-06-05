import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart, { loader as cartLoader } from './features/cart/Cart'

import ProductDetail, {
    loader as productLoader,
} from './features/menu/ProductDetail'
import ProductCategories from './features/menu/ProductCategories'
import Error from './ui/Error'
import AppLayout from './ui/AppLayout'
import SearchResult from './ui/SearchResult'
import FinishOrder from './features/order/FinishOrder'
import CheckOut from './features/order/CheckOut'
import MenuItem from './features/menu/MenuItem'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
})
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: '/menu',
                element: <Menu />,
                // loader: menuLoader,
                errorElement: <Error />,
                children: [
                    {
                        path: '/menu/product',
                        element: <MenuItem />,
                        errorElement: <Error />,
                    },
                    {
                        path: '/menu/:categories',
                        element: <ProductCategories />,
                        errorElement: <Error />,
                    },
                ],
            },
            {
                path: '/menu/productDetail/:id',
                element: <ProductDetail />,
                loader: productLoader,
                errorElement: <Error />,
            },

            {
                path: '/cart',
                element: <Cart />,
                loader: cartLoader,
                errorElement: <Error />,
            },
            {
                path: '/order/new',
                element: <CheckOut />,
                errorElement: <Error />,
            },
            {
                path: '/order/:orderId',
                element: <FinishOrder />,
                errorElement: <Error />,
            },
            {
                path: '/searchResult/:query',
                element: <SearchResult />,
                errorElement: <Error />,
            },
        ],
    },
])

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    success: { duration: 3000 },
                    error: { duration: 8000 },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                    },
                }}
            />
        </QueryClientProvider>
    )
}

export default App
