import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { checkOutOrder, getCartData } from '../../services/apiProduct'
import EmptyCart from '../cart/EmptyCart'
import { useSelector } from 'react-redux'
import { getCart } from '../cart/cartSlice'

function FinishOrder() {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const { orderId } = useParams()
    const order = useLoaderData()
    console.log(order)

    const paySuccess = async (orderId) => {
        try {
            const res = await axios.get(
                `${apiBaseUrl}/v2/api/${apiPath}/order/${orderId}`
            )
            console.log(res.data.order)

            getCartData()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        paySuccess(orderId)
    }, [orderId])
    // if (!orderData) return <EmptyCart />
    return (
        <div className="container mx-auto ">
            <div className="flex max-h-[20rem] justify-center py-3">
                <img
                    className="rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1576660016828-1d73950e9d2b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
            <div className="my-5">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="col-md-6">
                        <h2>訂購成功</h2>
                        <p>
                            感謝您的訂購！我們已經收到您的付款並確認訂單。您的商品將於三個工作日內進行出貨，請留意您所提供的聯絡方式，以便及時接收配送通知。如有任何疑問或需要協助，請隨時聯繫我們的客服團隊。再次感謝您的支持，祝您有個愉快的購物體驗！
                        </p>
                        <a
                            href="./index.html"
                            className="btn btn-outline-dark rounded-0 mb-4 me-2"
                        >
                            回首頁
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="py-4">
                            <div className=" flex items-center justify-center bg-white px-4 py-2">
                                <p className="text-xl font-semibold text-stone-700">
                                    訂購細項
                                </p>
                            </div>
                            <div className="px-4 ">
                                <ul className="">
                                    {Object.values(order?.products ?? {}).map(
                                        (item) => {
                                            return (
                                                <li className=" " key={item.id}>
                                                    <div className="mt-2 flex">
                                                        <img
                                                            src={
                                                                item.product
                                                                    .imageUrl
                                                            }
                                                            alt=""
                                                            className="max-h-[5rem] object-cover"
                                                        />
                                                        <div className="w-100 flex-column flex">
                                                            <div className="flex justify-between font-semibold">
                                                                <h5>
                                                                    {
                                                                        item
                                                                            .product
                                                                            .title
                                                                    }
                                                                </h5>
                                                                <p className="mb-0">
                                                                    x{item.qty}
                                                                </p>
                                                            </div>
                                                            <div className="mt-auto flex justify-between">
                                                                <p className="mb-0">
                                                                    <small>
                                                                        NT$
                                                                        {
                                                                            item
                                                                                .product
                                                                                .price
                                                                        }
                                                                    </small>
                                                                </p>
                                                                <p className="mb-0">
                                                                    {/* NT$ {item.total} */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    )}

                                    <li className="">
                                        <table className="">
                                            <tbody>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="font-weight-normal border-0 px-0"
                                                    >
                                                        優惠券
                                                    </th>
                                                    <td className="border-0 px-0 text-end">
                                                        NT${order.total}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="font-weight-normal border-0 px-0 pt-0"
                                                    >
                                                        Payment
                                                    </th>
                                                    <td className="border-0 px-0 pt-0 text-end">
                                                        ApplePay
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="mt-2 flex justify-between">
                                            <p className="fw-bold mb-0">合計</p>
                                            <p className=" fw-bold mb-0">
                                                NT${order.total}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinishOrder

export async function loader({ params }) {
    const order = await checkOutOrder(params.id)
    return order
}
