import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const InputExtraQuestionInfo = ({
  handleMoveNext,
  handleMoveBefore,
  handleInputChange,
}) => {
  const [itemList, setItemList] = useState([]);
  const [question, setQuestion] = useState('');
  const [isEssential, setIsEssential] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };

  const addItem = (newItem) => {
    setItemList((prevItems) => [...prevItems, newItem]);
  };
  const handleAddItem = () => {
    const newItem = {
      question: question,
      essential: isEssential,
    };
    addItem(newItem);
    console.log(newItem);

    setQuestion('');
    setIsEssential(false);
  };

  useEffect(() => {
    handleInputChange('questions', itemList);
  }, [itemList]);

  return (
    <Wrapper>
      <FormTitleBox>
        <Title>추가 질문 등록(선택)</Title>
        {itemList.length > 0 && (
          <>
            {itemList.map((item, index) => (
              <li key={index}>{`등록 질문: ${item.question} `}</li>
            ))}
          </>
        )}
        <DetailInputBox>
          <CommonInput
            width="100%"
            type="off"
            value={question}
            placeholder="질문을 입력해주세요"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <DetailInputBoxFooter>
            <CommonCheckBox
              onChange={(isChecked) => {
                setIsEssential(isChecked);
              }}
            />
            <CheckBoxTitle>응답 필수</CheckBoxTitle>
          </DetailInputBoxFooter>
        </DetailInputBox>
        <CommonButton
          size={'l'}
          type={'fillGray'}
          children={'+'}
          onClick={handleAddItem}
        />
      </FormTitleBox>
      <ButtonBox>
        <CommonButton
          size={'s'}
          type={'lineBlue'}
          children={'이전 단계'}
          onClick={handleMoveBefore}
        />
        <CommonButton
          size={'s'}
          type={'fillBlue'}
          children={'다음 단계'}
          onClick={handleMoveNext}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default InputExtraQuestionInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding-bottom: 10rem;
  padding-top: 3.6rem;
`;

const FormTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const Title = styled.div`
  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  display: flex;
  justify-content: center;
`;
const CheckBoxTitle = styled.div`
  color: var(--gray-gray1, #646464);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DetailInputBoxFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
const DetailInputBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
