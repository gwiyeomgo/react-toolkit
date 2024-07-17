import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DaumAdressSearch } from '../../lib/DaumAdressSearch/daumAdressSearch';

const meta = {
  title: '4.Templates/DaumAdressSearch',
  component: () => {
    return (
      <div style={{ height: '30rem' }}>
        <DaumAdressSearch
          name={'검색버튼'}
          customFullAdrress={(data) => {
            let fullAddress = data.roadAddress;
            if (fullAddress != null && fullAddress !== '') {
              fullAddress = data.roadAddress;
            } else {
              fullAddress = data.autoRoadAddress;
            }
            let extraAddr = '';

            const bname = data.hname
              ? data.hname
              : data.bname1
                ? data.bname1
                : data.bname;

            console.log('bname', bname);

            if (data.addressType === 'R') {
              if (data.bname !== '') {
                extraAddr += data.bname;
              }
              if (data.buildingName !== '') {
                extraAddr +=
                  extraAddr !== ''
                    ? `, ${data.buildingName}`
                    : data.buildingName;
              }
              fullAddress += extraAddr !== '' ? `(${extraAddr})` : '';
            }

            return fullAddress;
          }}
        />
      </div>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DaumAdressSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
