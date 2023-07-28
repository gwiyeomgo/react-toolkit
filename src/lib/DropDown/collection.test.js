import { Collection, useCollection } from './collection';
import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';

test("useCollection 의 getItems 사용해서 총 갯수 확인",()=>{
  const TestComponent = ()=>{
    const { getItems } = useCollection();
    // 컴포트가 렌더링되고
    // CollectionProvider가 itemMap을 값으로 채우기 충분한 시간필요해서 useEffect 사용
    useEffect(()=>{
      const options = getItems();
      expect(options.length).toEqual(2);
    },[])
    return
  }
  render(<Collection.Provider>
    <Collection.Item index={0} value={1}>{"title"}</Collection.Item>
    <Collection.Item index={1} value={2}>{"title"}</Collection.Item>
    <TestComponent/>
  </Collection.Provider>);
});

test("useCollection 의 focusItem 사용해서 CSS 클래스를 확인", () => {
  const TestComponent = ({ target }) => {
    const { focusItem } = useCollection();
    useEffect(() => {
      focusItem(target);
    }, []);
    return
  }
  render(<Collection.Provider>
    <Collection.Item index={0} value={1}>{"title1"}</Collection.Item>
    <Collection.Item index={1} value={2}>{"title2"}</Collection.Item>
    <TestComponent target={2} />
  </Collection.Provider>);


  const item1 = screen.getByText("title1")
  expect(item1).not.toHaveClass('selected');

  const item2 = screen.getByText("title2")
  expect(item2).toHaveClass('selected');
});



it("Collection.Provider 사용 안했을때",()=>{
   const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(<>
        <Collection.Item index={0} value={1}>{"title"}</Collection.Item>
        <Collection.Item index={1}  value={2}>{"title"}</Collection.Item>
      </>);
    }).toThrow( new Error('CollectionItem 는 Collection.Provider 내부에서 사용되어야 합니다'));

   console.error = originalError;

});

