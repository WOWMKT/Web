import { useEffect, useState } from 'react';
import CommonInput from '../common/CommonInput';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import { usePostTempPw } from '../../apis/post/users/usePostTempPw';
import { useSearchParams } from 'react-router-dom';
import { usePostResetPw } from '../../apis/post/users/usePostResetPw';
const ResetPw = () => {
  const [isTempPwSent, setIsTempPwSent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get('user_id'));
  const [pw, setPw] = useState('');
  const [pwCk, setPwCk] = useState('');

  //custom-hook
  const fetchData = usePostTempPw();

  const handleSubmit = () => {
    fetchData.sendTempPw({
      email: email,
    });
  };

  const fetchResetPwData = usePostResetPw();

  const handleSubmitResetPw = () => {
    fetchResetPwData.resetPw({
      email: email,
      password: pw,
    });
  };

  //페이지 타입 전환
  useEffect(() => {
    if (email !== null) {
      setIsTempPwSent(true);
    } else {
      setIsTempPwSent(false);
    }
  }, [email]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'pw') {
      setPw(value);
    } else if (name === 'pwCk') {
      setPwCk(value);
    }
    //setIsFilled(idValue.trim() !== '' && passwordValue.trim() !== '');
  };

  return (
    <Wrapper>
      <InputBox>
        <Subtitle>이메일주소</Subtitle>

        <CommonInput
          size={'l'}
          placeholder="가입하신 이메일 주소를 입력해주세요"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </InputBox>
      {isTempPwSent && (
        <InputBox>
          <Subtitle>비밀번호</Subtitle>
          <CommonInput
            size={'l'}
            placeholder="비밀번호를 입력해주세요"
            name="pw"
            value={pw}
            onChange={handleInputChange}
          />
          <CommonInput
            size={'l'}
            placeholder="비밀번호를 확인합니다"
            name="pwCk"
            value={pwCk}
            onChange={handleInputChange}
          />
        </InputBox>
      )}

      <CommonButton
        size={'l'}
        type="fillBlue"
        children={isTempPwSent ? '비밀번호 재설정하기' : '임시 비밀번호 받기'}
        onClick={isTempPwSent ? handleSubmitResetPw : handleSubmit}
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
