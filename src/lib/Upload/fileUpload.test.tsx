import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { fireEvent } from '@storybook/test';
import { FileUpload } from './fileUpload';

//URL mock
type OriginalURL = {
  revokeObjectURL: (href: string) => void;
  new (url: string | URL, base?: string | URL | undefined): URL;
  prototype: URL;
  createObjectURL(obj: Blob | MediaSource): string;
};
const originalURL: OriginalURL = globalThis.URL;
beforeEach(() => {
  globalThis.URL = {
    createObjectURL: jest.fn(),
  } as unknown as OriginalURL;
});

afterEach(() => {
  globalThis.URL = originalURL;
});

it('jpg 파일 테스트', async () => {
  const done = jest.fn();
  const save = () => {
    done();
  };
  render(<FileUpload selectFile={save} />);
  await act(() => {
    const fileInput = screen.getByTestId('Upload');

    const imageFile = new File(['image ...'], 'test.jpg', {
      type: 'image/jpeg',
    });
    fireEvent.change(fileInput, { target: { files: [imageFile] } });
  });

  await waitFor(() => {
    expect(done).toHaveBeenCalled();
  });
});

it('heic 파일 테스트', async () => {
  const done = jest.fn();
  render(
    <FileUpload
      selectFile={() => {
        done();
      }}
    />,
  );
  const fileInput = screen.getByTestId('Upload');

  const imageFile = new File(['heic ...'], 'test3.jpg', {
    type: 'image/heic',
  });

  await act(() => {
    fireEvent.change(fileInput, { target: { files: [imageFile] } });
  });

  await waitFor(() => {
    expect(done).toHaveBeenCalled();
  });
});
