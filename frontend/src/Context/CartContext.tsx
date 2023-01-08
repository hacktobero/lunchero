import { createContext, useState, useEffect } from "react";
import { CartContextType, ProviderType, Meals, Cart } from "../@types/cart";

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: ProviderType) => {
  const [mealsItems, setMealsItems] = useState<Meals[] | []>([]);

  const [cartItems, setCartItems] = useState<Cart[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setMealsItems(data.menu.meals);
    };
    getMeals().catch((e) => console.log(e));
  }, []);

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currentItems, { id, quantity: 1 }];
      } //Case where item dosen't already exists in cart
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  };

  const getItemQuantity = (id: number) => {
    const { quantity = 0 } = cartItems.find(item => item.id === id) || {};
    return quantity;
  };

  const initialState = {
    mealsItems,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
