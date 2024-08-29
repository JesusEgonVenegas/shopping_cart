import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (state[item.id]) {
        state[item.id].count += 1;
      } else {
        state[item.id] = {
          title: item.title,
          img: item.img,
          desc: item.desc,
          count: 1,
          price: item.price,
        };
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
