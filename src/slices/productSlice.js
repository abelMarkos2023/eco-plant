import { createSlice } from "@reduxjs/toolkit";
import {data} from '../data'

const initialState = data
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}

})

export default productSlice.reducer;