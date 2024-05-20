import type { Meta, StoryObj } from '@storybook/react';
import { ImageGallery } from '../../lib/ImageGallery/ImageGallery';

const meta = {
  title: '2.Molecules/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

//사진 출처 https://www.pexels.com/search/wedding/

export const Default: Story = {
  args: {
    data: [
      {
        alt: '1',
        preview_link:
          'https://cdn.pixabay.com/photo/2016/10/16/14/21/wedding-1745240_1280.jpg',
        link: 'https://cdn.pixabay.com/photo/2016/10/16/14/21/wedding-1745240_1280.jpg',
      },
      {
        alt: '2',
        preview_link:
          'https://cdn.pixabay.com/photo/2021/11/26/10/41/bride-6825609_1280.jpg',
        link: 'https://cdn.pixabay.com/photo/2021/11/26/10/41/bride-6825609_1280.jpg',
      },
      {
        alt: '3',
        preview_link:
          'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        alt: '4',
        preview_link:
          'https://cdn.pixabay.com/photo/2021/03/03/10/33/wedding-6064992_1280.jpg',
        link: 'https://cdn.pixabay.com/photo/2021/03/03/10/33/wedding-6064992_1280.jpg',
      },
      {
        alt: '5',
        preview_link:
          'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        alt: '6',
        preview_link:
          'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        alt: '7',
        preview_link:
          'https://cdn.pixabay.com/photo/2021/08/03/08/51/bride-6518872_1280.jpg',
        link: 'https://cdn.pixabay.com/photo/2021/08/03/08/51/bride-6518872_1280.jpg',
      },
      {
        alt: '8',
        preview_link:
          'https://images.pexels.com/photos/1777843/pexels-photo-1777843.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://images.pexels.com/photos/1777843/pexels-photo-1777843.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        alt: '9',
        preview_link:
          'https://images.pexels.com/photos/1533648/pexels-photo-1533648.jpeg?auto=compress&cs=tinysrgb&w=800',
        link: 'https://images.pexels.com/photos/1533648/pexels-photo-1533648.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
};
