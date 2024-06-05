import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import {
    Form,
    Link,
    redirect,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom'
import { Input, Select, CheckboxRadio } from '../../utils/formElement'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getCart, getCartTotalPrice } from '../cart/cartSlice'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helper'
import EmptyCart from '../cart/EmptyCart'

function CheckOut() {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const [mapData, setMapData] = useState([])
    const [selectedCity, setSelectedCity] = useState('')
    const [districtOptions, setDistrictOptions] = useState([])
    const navigate = useNavigate()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const cart = useSelector(getCart)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
    })
    const totalAmount = useSelector(getCartTotalPrice)

    const onSubmit = async (data) => {
        const { name, email, tel, address } = data
        const form = {
            data: {
                user: {
                    name,
                    email,
                    tel,
                    address,
                },
            },
        }

        try {
            const res = await axios.post(
                `${apiBaseUrl}/v2/api/${apiPath}/order`,
                form
            )
            console.log('Order submission response:', res.data)
            navigate(`/order/${res.data.orderId}`)
        } catch (error) {
            console.error('Error submitting order:', error)
        }
    }

    // if (cart.length === 0) return <EmptyCart />

    //讀取全台縣市鄉鎮資料
    const mapDataUrl = `https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json`

    const getMapData = async () => {
        try {
            const res = await axios.get(mapDataUrl)
            setMapData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    //判斷鄉鎮資料
    const handleCityChange = (e) => {
        const selectedCityValue = e.target.value
        setSelectedCity(selectedCityValue)

        //找到選擇的縣市鄉鎮資料
        const selectedCityData = mapData.find(
            (item) => item.CityName === selectedCityValue
        )
        //將鄉鎮資料儲存成陣列格式
        const districtOptions = selectedCityData
            ? selectedCityData.AreaList.map((area) => area.AreaName)
            : []
        setDistrictOptions(districtOptions)
    }

    useEffect(() => {
        getMapData()
    }, [])

    return (
        <div className="my-6 xs:px-3 sm:mx-6 ">
            <form className="min-w-96" onSubmit={handleSubmit(onSubmit)}>
                <p className="my-6 flex justify-center text-2xl font-semibold text-stone-700">
                    Customer info
                </p>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Input
                        register={register}
                        errors={errors}
                        id="name"
                        type="text"
                        labelText="Name"
                        placeholder=""
                        rules={{
                            required: 'Name required',
                            maxLength: {
                                value: 10,
                                message:
                                    'Username length must not exceed 10 characters',
                            },
                        }}
                    />
                </div>

                <div className="mb-5 flex w-full flex-col flex-wrap gap-2 sm:flex-row sm:items-center">
                    <Input
                        register={register}
                        errors={errors}
                        id="email"
                        type="email"
                        labelText="Email"
                        rules={{
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message:
                                    'The email format is incorrect; it should include symbols such as "@" and "."',
                            },
                        }}
                    />
                </div>
                <div className="mb-5 flex flex-col gap-2  sm:flex-row sm:items-center">
                    <Input
                        register={register}
                        errors={errors}
                        id="tel"
                        type="tel"
                        labelText="Phone"
                        rules={{
                            // value: true,
                            required: 'Mobile phone number is required.',
                            minLength: {
                                value: 6,
                                message:
                                    'The mobile phone number must be at least 6 digits.',
                            },
                            maxLength: {
                                value: 12,
                                message:
                                    'The mobile phone number must be at least 12 digits.',
                            },
                            pattern: {
                                value: /09\d{2}(\d{6}|-\d{3}-\d{3})/,
                                message:
                                    'It must adhere to the mobile phone format.',
                            },
                        }}
                    />
                </div>
                <p className="my-3 flex items-center justify-center text-xl font-semibold text-stone-700">
                    Deliver and Payment info
                </p>
                <div className="grid grid-cols-2 gap-4 py-6">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Select
                            register={register}
                            errors={errors}
                            labelText="City"
                            id="city"
                            onChange={(e) => handleCityChange(e)}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'City/County field is required.',
                                },
                            }}
                            disabled={false}
                        >
                            <option value="">Select City</option>
                            {mapData?.map((city) => (
                                <option
                                    value={city.CityName}
                                    key={city.CityName}
                                >
                                    {city.CityName}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Select
                            register={register}
                            errors={errors}
                            labelText="District"
                            id="district"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Township/District field is required.',
                                },
                            }}
                            disabled={false}
                        >
                            <option value="" disabled>
                                Select Countries
                            </option>
                            {districtOptions?.map((area) => (
                                <option value={area} key={area}>
                                    {area}
                                </option>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className="mb-3">
                    <Input
                        register={register}
                        errors={errors}
                        id="address"
                        type="text"
                        labelText="Address"
                        rules={{
                            required: {
                                value: true,
                                message: 'Address field is required.',
                            },
                        }}
                    />
                </div>
                <div className="mb-5">
                    <div className="form-label">Payment</div>
                    <CheckboxRadio
                        register={register}
                        errors={errors}
                        type="radio"
                        name="payment"
                        id="creditCard"
                        value="creditCard"
                        rules={{
                            required: {
                                value: true,
                                message: 'Please select a payment method.',
                            },
                        }}
                        labelText="Credit card (VISA, MasterCard, JCB)"
                        hasErrorMsg={false}
                    />
                    <CheckboxRadio
                        register={register}
                        errors={errors}
                        type="radio"
                        name="payment"
                        id="atm"
                        value="atm"
                        rules={{
                            required: {
                                value: true,
                                message: 'Please select a payment method.',
                            },
                        }}
                        labelText="Bank transfer／ATM"
                        hasErrorMsg={true}
                    />
                </div>
                <div className="mb-3">
                    <h5>Order memo</h5>
                    <textarea
                        className="form-control min-w-full"
                        rows="3"
                        placeholder="Do you have any additional information or notes for the store?"
                    ></textarea>
                </div>
                <div className="mb-5">
                    <CheckboxRadio
                        register={register}
                        errors={errors}
                        type="checkbox"
                        name="isSubscribed"
                        id="checkbox"
                        rules=""
                        labelText="I would like to receive the latest information and promotional offers."
                        hasErrorMsg={false}
                    />
                </div>
                <div className="min-w-full">
                    <div className="mb-4 bg-stone-200 px-6 py-4">
                        <p className="my-4 text-xl font-medium text-stone-700">
                            Details of the items purchased.
                        </p>
                        {cart.map((item) => {
                            return (
                                <div
                                    className="mb-3 flex border-b border-stone-400"
                                    key={item.id}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="mx-2 object-cover"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                        }}
                                    />
                                    <div className="w-100">
                                        <div className="flex justify-between">
                                            <p className="text-stone-700">
                                                {item.title}
                                            </p>
                                            <p className="text-stone-700">
                                                <small>x{item.quantity}</small>
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="mb-0 text-stone-700">
                                                {formatCurrency(item.price)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <hr />
                        <div className="mt-4 flex justify-between">
                            <p className="mb-2 text-xl font-semibold text-stone-700">
                                Total payment amount💰
                            </p>
                            <p className="mb-2 text-xl font-semibold text-stone-700 underline">
                                {formatCurrency(totalAmount)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-6 flex items-center justify-center gap-3">
                    {/* <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    /> */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary bg-indigo-500 px-7 py-3"
                    >
                        確認送出
                        {isSubmitting
                            ? 'Placing order🎶'
                            : `Order now from ${formatCurrency(totalAmount)}`}
                    </button>
                    <Button to="/cart" type="secondary">
                        Return to shopping cart.
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default CheckOut

// export async function action({ request }) {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)
//     const cart = JSON.parse(data.cart)
//     console.log('Received form data:', data)
//     console.log('Parsed cart:', cart)

//     const errors = {}

//     if (Object.keys(errors).length > 0) return errors
//     console.log(errors)

//     console.log('Form to submit:', form)
//     const newOrder = await onSubmit(form)
//     console.log('New order:', newOrder)

//     return redirect(`/order/${newOrder.orderId}`)
// }
