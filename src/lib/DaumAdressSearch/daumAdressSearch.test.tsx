import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { DaumAdressSearch } from './daumAdressSearch';
import userEvent from '@testing-library/user-event';

it('DaumAdressSearch 버튼 클릭 후 모달이 보이는지 확인', async () => {
  render(
    <DaumAdressSearch name="주소검색" customFullAdrress={() => 'adrress'} />,
  );
  const buttons = screen.getAllByRole('button');

  await waitFor(() => {
    act(() => {
      userEvent.click(buttons[0]);
    });
  });
});
