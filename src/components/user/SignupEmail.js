import CommonButton from '../common/CommonButton';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonInput from '../common/CommonInput';
import styled from 'styled-components';

const SignupEmail = () => {
  return (
    <Wrapper>
      <InputBox>
        <Subtitle>이름</Subtitle>
        <CommonInput size={'l'} placeholder="사용하실 이름을 입력해주세요" />
      </InputBox>

      <InputBox>
        <Subtitle>이메일주소</Subtitle>
        <SmallInputBox>
          <CommonInput
            size={'l'}
            width="80%"
            placeholder="이메일 주소를 입력해주세요"
          />
          <CommonButton size={'s'} children={'중복확인'} type={'fillGray'} />
        </SmallInputBox>
      </InputBox>

      <InputBox>
        <Subtitle>비밀번호</Subtitle>
        <CommonInput size={'l'} placeholder="비밀번호를 입력해주세요" />
        <CommonInput size={'l'} placeholder="비밀번호를 확인합니다" />
      </InputBox>

      <AgreementBox>
        <AgreementTop>
          <CommonCheckBox />
          전체동의
        </AgreementTop>
        <AgreementBody>
          <AgreementElem>
            <CommonCheckBox />
            <RedCaption>(필수)</RedCaption>
            서비스 이용약관 동의
            <RightCaption>{'>'}</RightCaption>
          </AgreementElem>
          <AgreementElem>
            <CommonCheckBox />
            <RedCaption>(필수)</RedCaption>
            서비스 이용약관 동의
            <RightCaption>{'>'}</RightCaption>
          </AgreementElem>
        </AgreementBody>
        <AgreementBody>
          <AgreementElem>
            <CommonCheckBox />
            <div>(선택)</div>
            서비스 이용약관 동의
            <RightCaption>{'>'}</RightCaption>
          </AgreementElem>
        </AgreementBody>
      </AgreementBox>
    </Wrapper>
  );
};

export default SignupEmail;

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
const SmallInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

const AgreementTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;

  color: var(--gray-gray1, #646464);
  /* Sub Text */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AgreementBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  padding-top: 2rem;
  border-top: 0.1rem solid #c1c1c1;
`;
const AgreementElem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  gap: 6%;

  color: var(--gray-gray1, #646464);

  /* Body 3 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const RedCaption = styled.div`
  color: var(--red, #f00);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RightCaption = styled.div`
  padding-left: 20%;
`;
