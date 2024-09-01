import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (state[item.id]) {
        state[item.id].count += item.count;
        state[item.id].price += item.price * item.count;
      } else {
        state[item.id] = {
          id: item.id,
          title: item.title,
          img: item.img,
          desc: item.desc,
          count: item.count,
          price: item.price * item.count,
          ogPrice: item.price,
        };
      }
    },
    changeCount: (state, action) => {
      const item = action.payload;
      console.log(item);
      if (state[item.id]) {
        state[item.id].count = item.count;
        state[item.id].price = state[item.id].ogPrice * item.count;
      }
    },
  },
});

export const { addItem, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
