import React, { createContext, ReactNode, useContext, useState } from 'react';

// 장바구니 아이템 타입 정의
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
//공개 포인터로 노출 모듈 패턴
// 장바구니 Context의 타입 정의
export interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  applyDiscount: () => void;
}

// 장바구니 Context 생성 (초기 값은 null)
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}
//React Context 내부 함수와 상태는 JavaScript의 클로저와 React의 컴포넌트 구조 덕분에 외부에서 직접 접근할 수 없는 비공개(private) 상태로 관리
const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCart((prev) => {
      // 같은 ID의 아이템이 이미 장바구니에 있는지 확인
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // 이미 있다면, 수량을 증가시킨 새로운 배열 반환
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }
      // 없다면 새 아이템 추가
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      // 해당 ID의 아이템 찾기
      const existingItem = prev.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.quantity > 1) {
        // 수량이 1보다 많으면 수량만 감소
        return prev.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        );
      }
      // 수량이 1이면 아이템 제거
      return prev.filter((cartItem) => cartItem.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyDiscount = () => {
    setCart((prev) =>
      prev.map((item) => ({
        ...item,
        price: parseFloat((item.price * 0.9).toFixed(2)),
      })),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, applyDiscount }}
    >
      {children}
    </CartContext.Provider>
  );
};
// useCart 커스텀 훅 정의
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
// Cart 모듈 구성
const ShoppingCart = {
  Provider: CartProvider,
  useCart,
};

export default ShoppingCart;
