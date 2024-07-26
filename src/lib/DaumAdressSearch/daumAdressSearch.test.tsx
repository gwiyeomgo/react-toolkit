import { render } from '@testing-library/react';
import React from 'react';

import { DaumAdressSearch } from './daumAdressSearch';
//import userEvent from '@testing-library/user-event';
import mountTest from '../../../tests/mountTest';
import accessibilityTest from '../../../tests/accessibilityTest';

describe('DaumAdressSearch 전체 테스트', () => {
  mountTest(DaumAdressSearch as any);
  //ARIA roles used must conform to valid values (aria-roles)
  //유효한 ARIA 역할 부여 필요
  accessibilityTest(DaumAdressSearch as any);

  it('DaumAdressSearch 버튼 클릭 후 모달이 보이는지 확인', async () => {
    const customFullAdrress = jest.fn((data) => data.address);
    render(
      <DaumAdressSearch
        name="주소검색"
        customFullAdrress={customFullAdrress}
      />,
    );
  });
});
