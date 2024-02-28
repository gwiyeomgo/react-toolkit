import { render } from '@testing-library/react';
import React from 'react';
import { File, SingleUpload } from './singleUplaod';

it('return when targetItem is null', async () => {
  const save = async (image: File) => {
    console.log(image);
  };

  render(<SingleUpload onSave={save} />);
});
