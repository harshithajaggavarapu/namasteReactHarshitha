const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      /// or we can also return [] like below
      // return []
      // this return will create a new state and updates the entire initialState object
      // if we do state =[] then the initialstate will remain same just a new array will be assigned to state
    },
  },
});

// each slice will be returning 2 things 1. reducer 2. actions

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
