import { render } from '@testing-library/react';

import React from 'react';
import FixedCenterModal from './fixedCenterModal';

it('DaumAdressSearch 버튼 클릭 후 모달이 보이는지 확인', async () => {
  const closeModal = () => {
    return false;
  };

  render(<FixedCenterModal isOpen={true} onClick={closeModal} />);
});
