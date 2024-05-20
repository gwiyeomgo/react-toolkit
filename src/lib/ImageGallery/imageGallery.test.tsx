import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ImageGallery } from './ImageGallery';
import userEvent from '@testing-library/user-event';

it('ImageGallery 이미지 클릭하면 모달 오픈', async () => {
  render(
    <ImageGallery
      data={[
        {
          alt: '1',
          preview_link: '0_1280.jpg',
          link: '0_1280.jpg',
        },
      ]}
    />,
  );

  const images = screen.getAllByRole('img');

  await act(() => {
    userEvent.click(images[0]);
  });
  const images2 = screen.getAllByRole('img');
  await waitFor(() => {
    expect(images2[1]).toHaveAttribute('alt', 'original size');
  });
});

it('Image 모달 오픈 후 오른쪽 클릭시 다른 사진 ', async () => {
  render(
    <ImageGallery
      data={[
        {
          alt: '1',
          preview_link: '0_1280.jpg',
          link: '0_1280.jpg',
        },
        {
          alt: '2',
          preview_link: '222.jpg',
          link: '222.jpg',
        },
      ]}
    />,
  );

  const images = screen.getAllByRole('img');

  await act(() => {
    userEvent.click(images[0]);
  });

  const images2 = screen.getAllByRole('img');
  await waitFor(() => {
    expect(images2[2]).toHaveAttribute('src', '0_1280.jpg');
  });

  await act(() => {
    userEvent.click(images2[4]);
  });

  const images3 = screen.getAllByRole('img');
  await waitFor(() => {
    expect(images3[2]).toHaveAttribute('src', '222.jpg');
  });
});
