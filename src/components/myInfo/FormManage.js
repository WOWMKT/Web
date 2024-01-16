import React, { useEffect } from 'react';
import BackTopBar from '../common/BackTopBar';
import styled from 'styled-components';
import CommonCheckBox from '../common/CommonCheckBox';

const FormManage = () => {
  return (
    <Wrapper>
      <BackTopBar children={'수집폼 관리'} />
      <FormBody>
        <Header>
          <CommonCheckBox />
          <Tag>확정</Tag>
          <Tag>배송대기</Tag>
          <Tag>배송중</Tag>
          <Tag>배송완료</Tag>
          <Tag>환불완료</Tag>
        </Header>

        <Body>
          <Stack>
            <CommonCheckBox />
            <Date>2023. 10. 15</Date>
            <State>확정필요</State>
            <SellerName>wow1234</SellerName>
            <MoveBut>{'>'}</MoveBut>
          </Stack>
          <Stack>
            <CommonCheckBox />
            <Date>2023. 10. 15</Date>
            <State>확정필요</State>
            <SellerName>wow1234</SellerName>
            <MoveBut>{'>'}</MoveBut>
          </Stack>
          <Stack>
            <CommonCheckBox />
            <Date>2023. 10. 15</Date>
            <State>확정필요</State>
            <SellerName>wow1234</SellerName>
            <MoveBut>{'>'}</MoveBut>
          </Stack>
        </Body>
      </FormBody>
    </Wrapper>
  );
};

export default FormManage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const MoveBut = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  border-bottom: 1px solid #c1c1c1;
`;
const Tag = styled.div`
  color: #646464;

  /* Sub Text */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;

  padding-bottom: 3rem;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;
`;
const Stack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
`;
const Date = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const State = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SellerName = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
