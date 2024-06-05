import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProduct } from '../../services/apiProduct'

// export const fetchCategory = createAsyncThunk(
//     'product / fetchCategory',
//     async function () {
//         const allProduct = await getAllProduct()
//         return allProduct
//     }
// )
// const initialState = {
//     allCategory: {},
//     status: 'idle',
//     error: '',
// }

// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     extraReducers: (builder) =>
//         builder
//             .addCase(fetchCategory.pending, (state, action) => {
//                 state.status = 'loading'
//             })
//             .addCase(fetchCategory.fulfilled, (state, action) => {
//                 state.allCategory = action.payload
//                 state.status = 'idle'
//             })
//             .addCase(fetchCategory.rejected, (state, action) => {
//                 state.status = 'error'
//                 state.error = 'fail to fetch'
//             }),
// })
// export default productSlice.reducer
