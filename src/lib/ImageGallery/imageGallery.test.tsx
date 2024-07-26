import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { ImageGallery } from './ImageGallery';
import userEvent from '@testing-library/user-event';
import mountTest from '../../../tests/mountTest';

import accessibilityTest from '../../../tests/accessibilityTest';

describe('ImageGallery 전체 테스트', () => {
  mountTest(ImageGallery as any);
  accessibilityTest(ImageGallery as any);

  it('ImageGallery 이미지 클릭하면 모달 오픈', () => {
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

    act(() => {
      userEvent.click(images[0]);
    });
    const images2 = screen.getAllByRole('img');
    expect(images2[1]).toHaveAttribute('alt', 'original size');
  });

  it('Image 모달 오픈 후 오른쪽 클릭시 다른 사진 ', () => {
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

    act(() => {
      userEvent.click(images[0]);
    });

    const images2 = screen.getAllByRole('img');
    expect(images2[2]).toHaveAttribute('src', '0_1280.jpg');

    act(() => {
      userEvent.click(images2[4]);
    });

    const images3 = screen.getAllByRole('img');
    expect(images3[2]).toHaveAttribute('src', '222.jpg');
  });
});
