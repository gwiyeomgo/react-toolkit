import { render, screen, waitFor, act } from '@testing-library/react';
import React from 'react';
import { File as file, SingleUpload, SingleUploadProps } from './singleUplaod';
import { fireEvent } from '@storybook/test';

it('SingleUpload', async () => {
  const done = jest.fn();
  const props: SingleUploadProps = {
    imageFileOnly: false,
    onSave: async (image: file) => {
      console.log(image);
      done();
    },
  };

  render(<SingleUpload {...props} />);

  const fileInput = screen.getByTestId('Upload');
  const file = new File(['text......'], 'test2.txt', {
    type: 'text/plain',
  });
  const fileChangeEvent = { target: { files: [file] } };
  //파일 변경

  act(() => {
    fireEvent.change(fileInput, fileChangeEvent);
  });

  waitFor(() => {
    expect(done).toHaveBeenCalled();
  });
});
