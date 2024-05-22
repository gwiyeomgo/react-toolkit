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
import { SortableList } from './sortableList';
import { fireEvent } from '@testing-library/react';
it('SelectBox 렌더링', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(
      React.createElement(SortableList, {
        initialList: ['1', '2', '3'],
        height: 200,
      }),
    );
    const item = screen.getByText('1');
    yield act(() => {
      fireEvent.touchStart(item);
    });
    yield waitFor(() => {
      expect(item.classList).toHaveProperty('0', 'touched');
    });
  }));
