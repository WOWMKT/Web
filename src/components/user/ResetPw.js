import { useState } from 'react';
import CommonInput from '../common/CommonInput';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
const ResetPw = () => {
  const [isTempPwSent, setIsTempPwSent] = useState(false);
  const handleButtonClick = () => {
    setIsTempPwSent(!isTempPwSent); // 토글
  };
  return (
    <Wrapper>
      <InputBox>
        <Subtitle>이메일주소</Subtitle>

        <CommonInput
          size={'l'}
          placeholder="가입하신 이메일 주소를 입력해주세요"
        />
      </InputBox>
      {isTempPwSent && (
        <InputBox>
          <Subtitle>비밀번호</Subtitle>
          <CommonInput size={'l'} placeholder="비밀번호를 입력해주세요" />
          <CommonInput size={'l'} placeholder="비밀번호를 확인합니다" />
        </InputBox>
      )}

      <CommonButton
        size={'l'}
        type="fillBlue"
        children={isTempPwSent ? '비밀번호 재설정하기' : '임시 비밀번호 받기'}
        onClick={handleButtonClick}
      />
    </Wrapper>
  );
};

export default ResetPw;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Subtitle = styled.div`
  color: var(--black, #000);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
