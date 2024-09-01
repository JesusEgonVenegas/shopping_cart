import Cart from './Cart'
import { render, screen } from '@testing-library/react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartSlice from '../features/cart/cartSlice'
import { userEvent } from '@testing-library/user-event'
import { addItem } from '../features/cart/cartSlice'

const rootReducer = combineReducers({ cart: cartSlice })

let store = configureStore({ reducer: rootReducer })

describe('cart', () => {
  it('does the thing', async () => {
    render(<Provider store={store}>
      <Cart />
    </Provider>)
    const cartButton = screen.getByText('cart')
    await userEvent.click(cartButton)
    expect(screen.getByText('Total')).toBeInTheDocument()
    await store.dispatch(addItem({id: 2,
        title: "Title",
        img: null,
        desc: "Description",
        count: 5,
        price: 44}))
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
    await store.dispatch(addItem({id: 1,
        title: "Title 2",
        img: null,
        desc: "Description",
        count: 3,
        price: 44}))
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Title 2')).toBeInTheDocument()
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
    expect(screen.getByDisplayValue('3')).toBeInTheDocument()
  })
})