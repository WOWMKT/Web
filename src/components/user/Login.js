import { useCallback, useState } from 'react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import styled from 'styled-components';
import { usePostEmailLogin } from '../../apis/post/users/usePostEmailLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();

  //custom-hook
  const fetchData = usePostEmailLogin();

  const moveToKakao = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=5f5637e7e7a8e9c602eff8abb6909200&redirect_uri=https://wowmarket-web.vercel.app/users/kakao&response_type=code';
  };

  const moveToSingup = () => {
    navigate('/users/signup');
  };
  const moveToResetpw = () => {
    navigate('/users/resetPw');
  };

  const handleIdChange = (e) => {
    setIdValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = () => {
    fetchData.emailLogin({
      email: idValue,
      password: passwordValue,
    });
  };

  return (
    <Wrapper>
      <InputBox>
        <CommonInput
          size={'l'}
          width="100%"
          placeholder="아이디(이메일)"
          value={idValue}
          onChange={handleIdChange}
        />
        <CommonInput
          size={'l'}
          width="100%"
          placeholder="비밀번호"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </InputBox>
      <InputBox>
        <CommonButton
          size={'l'}
          type="fillBlue"
          children={'로그인'}
          onClick={handleSubmit}
        />
        <CommonButton
          size={'l'}
          type="kakao"
          children={'카카오 로그인'}
          onClick={moveToKakao}
        />
      </InputBox>
      <CaptionBox>
        <CaptionBut onClick={moveToSingup}>회원가입</CaptionBut>
        <CaptionBut>|</CaptionBut>
        <CaptionBut onClick={moveToResetpw}>비밀번호 재설정</CaptionBut>
      </CaptionBox>
    </Wrapper>
  );
};

export default Login;

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

const CaptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5rem;

  color: var(--black, #000);
  /* Body 4 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
`;
const CaptionBut = styled.button``;
