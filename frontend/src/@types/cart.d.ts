interface Meals {
  name: string;
  id: number;
  type: string;
  ingredients: string;
  tag: string;
}
interface Cart {
  id: number;
  quantity: number;
}

export type CartContextType = {
  mealsItems: Meals[] | [];
  cartItems: Cart[] | [];
  getItemQuantity: (id: number) => {};
  increaseCartQuantity: (id: number) => {};
  decreaseCartQunatity: (id: number) => {};
};

export type ProviderType = {
  children?: React.ReactNode;
};
