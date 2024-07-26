import React, { useState } from 'react';
import { Button } from '../Buttton/button';
import { Input } from '../Input/input';
import styled from 'styled-components';
import FixedCenterModal from '../Modal/fixedCenterModal';
import DaumPostcode from 'react-daum-postcode';
import { GlobalPortal } from '../Util/globalPortal';

//https://stackoverflow.com/questions/8690841/how-do-i-line-up-3-divs-on-the-same-row
const Row = styled.div`
  display: table;
  width: 100%; /*Optional*/
  table-layout: fixed; /*Optional*/
  border-spacing: 10px; /*Optional*/
`;

const Column = styled.div`
  display: table-cell;
`;
//https://velog.io/@lemonade4813/React-react-daum-postcode-%EC%97%B0%EB%8F%99

const DaumAdressSearch: React.FC<{
  name: string;
  customFullAdrress: (d: any) => string;
}> = (props) => {
  const [address, setAddress] = useState('');
  const [postNo, setPostNo] = useState('');
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  const onCompletePost = (data: any) => {
    // 도로명 주소 적용

    const fullAddress = props.customFullAdrress(data);

    setAddress(fullAddress);
    setPostNo(data.zonecode);
    closeModal();
    //https://github.com/daumPostcode/QnA/issues/42#issuecomment-255291680
    // console.log('post data2::', data.bcode, bname, fullAddress);
  };

  return (
    <GlobalPortal.Provider>
      <div>
        <Row>
          <Column>
            <Input value={postNo} readOnly={true} />
          </Column>
          <Column>
            <Button onClick={openModal}>{props.name}</Button>
          </Column>
        </Row>
        <Row>
          <Input value={address} readOnly={true} />
        </Row>
        <FixedCenterModal isOpen={show} onClose={closeModal}>
          <DaumPostcode
            autoClose={true}
            onComplete={onCompletePost}
            showMoreHName={true}
          />
        </FixedCenterModal>
      </div>
    </GlobalPortal.Provider>
  );
};

export { DaumAdressSearch };
