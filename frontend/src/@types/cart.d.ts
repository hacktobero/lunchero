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
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
};

export type ProviderType = {
  children?: React.ReactNode;
};
