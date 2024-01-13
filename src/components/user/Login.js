import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper>
      <InputBox>
        <CommonInput size={'l'} width="100%" placeholder="아이디(이메일)" />
        <CommonInput size={'l'} width="100%" placeholder="비밀번호" />
      </InputBox>
      <InputBox>
        <CommonButton size={'l'} type="fillBlue" children={'로그인'} />
        <CommonButton size={'l'} type="kakao" children={'카카오 로그인'} />
      </InputBox>
      <CaptionBox>
        <CaptionBut>회원가입</CaptionBut>
        <CaptionBut>|</CaptionBut>
        <CaptionBut>비밀번호 재설정</CaptionBut>
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
  gap: 1rem;

  color: var(--black, #000);
  /* Body 4 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
`;
const CaptionBut = styled.div``;
