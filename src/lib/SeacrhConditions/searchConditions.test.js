import React from 'react'
import { render } from '@testing-library/react'

import {SearchConditionsProvider,useSearchConditions} from './searchConditions'

const TestPage = ({ pageName }) => {
    const {searchConditions} = useSearchConditions();
}
describe("SearchConditionsProvider test",()=>{

    test('SearchConditionsProvider 에 렌더링 완료 (성공)', () => {
        render(
            <SearchConditionsProvider pageName={"페이지1"}>
                <TestPage pageName={"페이지1"}/>
            </SearchConditionsProvider>,
        );
    });

    it('SearchConditionsProvider 에 pageName 이 없는 경우 (실패)', () => {
        const originalError = console.error;
        console.error = jest.fn();

        expect(() => {
            render( <SearchConditionsProvider >
                <TestPage pageName={"페이지2"}/>
            </SearchConditionsProvider>);
        }).toThrow( new Error('SearchConditionsProvider 에 pageName props 값을 지정해 주세요.'));

        console.error = originalError;
    });

    test("useSearchConditions 를 SearchConditionsProvider 로 감싸지 않고 사용한 경우 (실패)",()=>{
        const originalError = console.error;
        console.error = jest.fn();

        expect(() => {
            render(
                <TestPage pageName={"페이지3"}/>
            );
        }).toThrow( new Error('useSearchConditions 는 SearchConditionsProvider 내부에서 사용되어야 합니다'));

        console.error = originalError;
    })

})
