var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ImageGallery } from './ImageGallery';
import userEvent from '@testing-library/user-event';
it('ImageGallery 이미지 클릭하면 모달 오픈', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(
      React.createElement(ImageGallery, {
        data: [
          {
            alt: '1',
            preview_link: '0_1280.jpg',
            link: '0_1280.jpg',
          },
        ],
      }),
    );
    const images = screen.getAllByRole('img');
    yield act(() => {
      userEvent.click(images[0]);
    });
    const images2 = screen.getAllByRole('img');
    yield waitFor(() => {
      expect(images2[1]).toHaveAttribute('alt', 'original size');
    });
  }));
it('Image 모달 오픈 후 오른쪽 클릭시 다른 사진 ', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(
      React.createElement(ImageGallery, {
        data: [
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
        ],
      }),
    );
    const images = screen.getAllByRole('img');
    yield act(() => {
      userEvent.click(images[0]);
    });
    const images2 = screen.getAllByRole('img');
    yield waitFor(() => {
      expect(images2[2]).toHaveAttribute('src', '0_1280.jpg');
    });
    yield act(() => {
      userEvent.click(images2[4]);
    });
    const images3 = screen.getAllByRole('img');
    yield waitFor(() => {
      expect(images3[2]).toHaveAttribute('src', '222.jpg');
    });
  }));
