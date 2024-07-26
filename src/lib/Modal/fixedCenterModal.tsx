import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  ReactNode,
} from 'react';
import { Button } from '../Buttton/button';
import { GlobalPortal } from '../Util/globalPortal';

import React from 'react';
import { Icon } from '../Icon/icon';

export type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  modalStyle?: CSSProperties;
};
const FixedCenterModal = forwardRef(function FixedCenterModal(
  props: ComponentPropsWithoutRef<typeof Button> & ModalProps, //https://www.pumpkiinbell.com/blog/react/reusable-components
  ref,
) {
  const { isOpen, onClose, modalStyle, children, ...buttonProps } = props;
  return isOpen ? (
    <GlobalPortal.Consumer>
      <div
        className="modal"
        style={{
          ...modalStyle,
          backgroundColor: 'white',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <Button {...buttonProps} onClick={onClose} ref={ref}>
          <Icon icon={'Cross'} color="white" width={'1rem'} height={'1rem'} />
        </Button>
        {children}
      </div>
    </GlobalPortal.Consumer>
  ) : (
    <></>
  );
});

export default FixedCenterModal;
