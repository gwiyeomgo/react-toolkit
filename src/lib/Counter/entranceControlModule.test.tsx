import { render } from '@testing-library/react';
import { EntranceControlModule } from '../Counter/entranceControlModule';
import React from 'react';

it('EntranceControlModule 렌더링', () => {
  render(<EntranceControlModule entranceBtn={true} exitBtn={true} />);
});
