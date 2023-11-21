import {
  render,
  waitFor,
  screen, act,
} from '@testing-library/react';
import { Icon, IconName } from "./icon";

describe("<Icon />", () => {
  it.each(Object.keys(IconName) )(
    "renders correct %s icon without violations",
       async (iconName) => {
         render(<Icon icon={iconName} />);
         // act 함수 내에서 비동기 작업이 실행되도록 수정
         await act(async () => {
           const iconElement = screen.getByRole('img');

           // waitFor 함수 내에서 실제 테스트 수행
           await waitFor(() => {
             expect(iconElement).toHaveAttribute("aria-label", iconName);
           });
         });

       }
  );
});