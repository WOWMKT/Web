import { useEffect, useState } from 'react';
import CommonInput from '../common/CommonInput';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import CommonDropDown from '../common/CommonDropDown';
import { useSearchParams } from 'react-router-dom';
import { usePostUnivInfo } from '../../apis/post/users/usePostUnivInfo';
import { usePostUnivCode } from '../../apis/post/users/usePostUnivCode';
const UnivCert = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCodeSent, setIsCodeSent] = useState(searchParams.get('isCodeSent'));
  const [univName, setUnivName] = useState('');
  const [univEmail, setUnivEmail] = useState('');
  const [code, setCode] = useState('');

  //public 데이터로 저장 필요
  const univList = [
    { value: '홍익대학교', label: '홍익대학교' },
    { value: '이화여자대학교', label: '이화여자대학교' },
    { value: '숙명여자대학교', label: '숙명여자대학교' },
  ];

  //custom-hook
  const fetchSendCode = usePostUnivInfo();
  const fetchCertCode = usePostUnivCode();

  const handleSubmitUnivInfo = () => {
    fetchSendCode.univInfo({
      univ_name: univName,
      univ_email: univEmail,
    });
  };
  const handleSubmitUnivCode = () => {
    fetchCertCode.univCert({
      univ_name: univName,
      univ_email: univEmail,
      code: code,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'univEmail') {
      setUnivEmail(value);
    } else if (name === 'code') {
      setCode(value);
    }
    //setIsFilled(idValue.trim() !== '' && passwordValue.trim() !== '');
  };

  const handleSelect = (selectedOption) => {
    setUnivName(selectedOption.value);
  };

  useEffect(() => {
    console.log(isCodeSent);
    if (isCodeSent === null) {
      setIsCodeSent(false);
    } else {
      setIsCodeSent(true);
    }
  }, [isCodeSent]);

  return (
    <Wrapper>
      <InputBox>
        <Subtitle>대학명</Subtitle>
        <CommonDropDown
          options={univList}
          onSelect={handleSelect}
          width="100%"
        />
      </InputBox>
      <InputBox>
        <Subtitle>학교이메일</Subtitle>
        <CommonInput
          size={'l'}
          placeholder="학교 이메일을 입력해주세요"
          name="univEmail"
          value={univEmail}
          onChange={handleInputChange}
        />
        <CommonButton
          size={'l'}
          type="fillBlue"
          children={'인증번호 발생'}
          onClick={handleSubmitUnivInfo}
        />
      </InputBox>
      <InputBox>
        <CommonInput
          size={'l'}
          placeholder="인증번호를 입력해주세요"
          name="code"
          value={code}
          onChange={handleInputChange}
          disabled={!isCodeSent}
        />
        <CommonButton
          size={'l'}
          type="fillGray"
          children={'인증번호 확인'}
          onClick={handleSubmitUnivCode}
          disabled={!isCodeSent}
        />
      </InputBox>
      <CaptionBox>{'> 다음에 인증하기'}</CaptionBox>
    </Wrapper>
  );
};

export default UnivCert;
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
const Subtitle = styled.div`
  color: var(--black, #000);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
