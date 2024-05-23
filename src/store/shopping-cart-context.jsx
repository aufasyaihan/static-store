import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart : () => {}, // dummy function for better autocomplition
    updateCartItemQuantity : () => {},
})