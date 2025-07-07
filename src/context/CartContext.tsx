import { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartActions = {
  ADD_TO_CART: (state: CartState, product: Product) => {
    const existingItem = state.items.find(item => item.id === product.id);
    let newItems: CartItem[];
    
    if (existingItem) {
      newItems = state.items.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newItems = [...state.items, { ...product, quantity: 1 }];
    }
    
    return calculateTotals(newItems);
  },
  
  REMOVE_FROM_CART: (state: CartState, id: string) => {
    const newItems = state.items.filter(item => item.id !== id);
    return calculateTotals(newItems);
  },
  
  UPDATE_QUANTITY: (state: CartState, { id, quantity }: { id: string; quantity: number }) => {
    const newItems = state.items
      .map(item => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)
      .filter(item => item.quantity > 0);
      
    return calculateTotals(newItems);
  },
  
  CLEAR_CART: () => initialState
};

function calculateTotals(items: CartItem[]): CartState {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  return { items, total, itemCount };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  const handler = cartActions[action.type];
  return handler ? handler(state, action.payload as never) : state;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}