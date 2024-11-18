import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    items: [],
    total: 0,
    subTotal: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.findIndex(i => i.id === item.id);
            if(existingItem !== -1){
                state.items[existingItem].quantity++;
            }else{
                state.items.push({...item,quantity:1})
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        increament: (state, action) => {
            state.items = state.items.map(item => item.id == action.payload ? {...item,quantity:item.quantity+1}: item)
        },
        decreament: (state,action) => {
            const index = state.items.findIndex(item => item.id == action.payload);

            if(index == -1){
                return
            }
            if(state.items[index].quantity == 1){
                state.items = state.items.filter(item => item.id !== action.payload)
            }else{
                state.items = state.items.map(item => item.id == action.payload ? {...item,quantity:item.quantity - 1} : item)
            }
        }
    }
})
export const {removeItem,addItem,increament,decreament} = cartSlice.actions
export default cartSlice.reducer;