import { createContext, useState, useEffect } from "react";
import { CartContextType, ProviderType, Meals, Cart } from '../@types/cart';
 
export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: ProviderType) => {
    const [mealsItems, setMealsItems] = useState<Meals[] | []>([]);

    const [cartItems, setCartItems] = useState<Cart[]>([]);


    useEffect(() => {
        const getMeals = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setMealsItems(data.menu.meals)
        }
        getMeals().catch(e => console.log(e));
    }, []);

    const increaseCartQuantity = (id: number) => {
       
    }


    const initialState = {
        mealsItems,
        cartItems,

    }

    return (
        <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
    )
};

export default CartProvider;