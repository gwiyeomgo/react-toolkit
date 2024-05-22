import React from 'react';
type Image = {
  link: string;
  preview_link: string;
  alt: string;
};
declare const Image: import('styled-components/dist/types').IStyledComponentBase<
  'web',
  import('styled-components').FastOmit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    never
  >
> &
  string;
declare const ImageGallery: ({ data }: { data: Image[] }) => React.JSX.Element;
export { ImageGallery };
