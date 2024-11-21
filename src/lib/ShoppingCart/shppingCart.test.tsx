import { act, render, screen } from '@testing-library/react';
import ShoppingCart from '../ShoppingCart/shoppingCart';
import React from 'react';
import shoppingCart from '../ShoppingCart/shoppingCart';
import { Button } from '../Buttton/button';
import userEvent from '@testing-library/user-event';

export interface ItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const TestStore = ({ items }: { items: ItemProps[] }) => {
  const { cart, addItem, applyDiscount, clearCart } = shoppingCart.useCart();
  return (
    <>
      {`총:${cart.reduce((sum, item) => sum + item.quantity, 0)}`}
      {items.map((item, k) => {
        return (
          <div key={k}>
            <span>{item.name}</span>
            <Button
              onClick={() => {
                addItem(item);
              }}
            >
              담기
            </Button>
            <Button
              onClick={() => {
                applyDiscount();
              }}
            >
              할인
            </Button>
            <Button
              onClick={() => {
                clearCart();
              }}
            ></Button>
          </div>
        );
      })}
    </>
  );
};
it('ShoppingCart 렌더링', () => {
  const sampleItems = [
    { id: '1', name: '사과', price: 1000, quantity: 1 },
    { id: '2', name: '바나나', price: 5000, quantity: 1 },
    { id: '3', name: '오렌지', price: 500, quantity: 1 },
  ];

  render(
    <ShoppingCart.Provider>
      <TestStore items={sampleItems} />
    </ShoppingCart.Provider>,
  );
});

it('ShoppingCart 장바구니 담기', () => {
  const sampleItems = [
    { id: '1', name: '사과', price: 1000, quantity: 1 },
    { id: '2', name: '바나나', price: 5000, quantity: 1 },
    { id: '3', name: '오렌지', price: 500, quantity: 1 },
  ];

  render(
    <ShoppingCart.Provider>
      <TestStore items={sampleItems} />
    </ShoppingCart.Provider>,
  );

  act(() => {
    const buttonElements = screen.getAllByText('담기');
    userEvent.click(buttonElements[0]);
  });

  const totalElement = screen.getByText('총:1');
  expect(totalElement).toBeInTheDocument();
});
