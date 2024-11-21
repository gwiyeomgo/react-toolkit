import React from 'react';
import ShoppingCart from '../../lib/ShoppingCart/shoppingCart';

export const ShoppingCartExample = () => {
  const sampleItems = [
    { id: '1', name: '사과', price: 1000, quantity: 1 },
    { id: '2', name: '바나나', price: 5000, quantity: 1 },
    { id: '3', name: '오렌지', price: 500, quantity: 1 },
  ];

  return (
    <ShoppingCart.Provider>
      <FruitStore items={sampleItems} />
      <CartDisplay />
    </ShoppingCart.Provider>
  );
};

export interface ItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const FruitStore = ({ items }: { items: ItemProps[] }) => {
  const { addItem } = ShoppingCart.useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h1>과일가게</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item: ItemProps) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <span>
              {item.name} - {item.price}원
            </span>
            <button
              onClick={() => addItem(item)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              담기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// 장바구니를 보여주는 컴포넌트
const CartDisplay = () => {
  const { cart, removeItem, clearCart } = ShoppingCart.useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ marginTop: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <span>
              {item.name} - {item.price} - {item.quantity}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <p>
        <strong>총:</strong> {total} 원
      </p>
      <div>
        <button
          onClick={clearCart}
          style={{
            padding: '5px 10px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          장바구니 비우기
        </button>
      </div>
    </div>
  );
};
