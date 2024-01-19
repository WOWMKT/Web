import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import CommonDropDown from '../common/CommonDropDown';
import CommonCalender from '../common/CommonCalendar';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonTextarea from '../common/CommonTextarea';
import ItemInputBox from './ItemInputBox';
import { useGetImageUrl } from '../../apis/get/register/useGetImageUrl';
import { usePutImage } from '../../apis/post/register/usePutImage';
import axios from 'axios';
import axiosInstance from '../../apis';

const InputGoodsInfo = ({
  handleMoveNext,
  handleMoveBefore,
  isInput = false,
  handleInputChange,
}) => {
  const categoryOptions = [
    { value: '우리은행', label: '우리은행' },
    { value: '신한은행', label: '신한은행' },
    { value: '국민은행', label: '국민은행' },
  ];
  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };
  const [itemInputBoxes, setItemInputBoxes] = useState([
    <ItemInputBox key={0} />,
  ]);

  const [projectName, setProjectName] = useState('');
  // const [thumbnail, setThumbnail] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState(0);
  const [description, setDescription] = useState('');
  // const [image1, setImage1] = useState('');
  // const [item, setItem] = useState([]);

  // const [selectedFile, setSelectedFile] = useState(null);
  const [mode, setMode] = useState('project');
  const [isImgUpdate, setIsImgUpdate] = useState(false);
  const [presignedUrl, setPresignedUrl] = useState('');
  const [desiredUrl, setDesiredUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  //custom-hook
  const fetchedUrl = useGetImageUrl(mode); //대표이미지 들어갈 url
  const fetchData = usePutImage();

  const handleAddItemInputBox = () => {
    // 현재 itemInputBoxes 상태 배열을 복제한 후 새로운 ItemInputBox를 추가합니다
    setItemInputBoxes((prevBoxes) => [
      ...prevBoxes,
      <ItemInputBox key={prevBoxes.length} />,
    ]);
  };

  const handleImgSubmit = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsImgUpdate(true);
  };

  const handleImgUploader = async (selectedFile) => {
    //그냥 AXIOS업로드 나중에 QUERY수정
    await axiosInstance.put(presignedUrl, selectedFile, {
      headers: {
        'Content-Type': selectedFile.type,
      },
    });

    //접근 가능한 url뱉어내기
    setDesiredUrl(presignedUrl.split('?')[0]);
  };

  useEffect(() => {
    if (!fetchedUrl.isLoading) {
      console.log('url세팅완료');
      setPresignedUrl(fetchedUrl.imageUrl);
      console.log(presignedUrl);
    }
  }, [fetchedUrl.isLoading]);

  useEffect(() => {
    if (isImgUpdate) {
      // console.log('이미지 업로드');
      // console.log(presignedUrl);
      //fetchData.uploadImage(presignedUrl, selectedFile, selectedFile.type);
      handleImgUploader(selectedFile);
    }
  }, [isImgUpdate]);

  useEffect(() => {
    if (desiredUrl !== '') {
      console.log(desiredUrl);
    }
  }, [desiredUrl]);

  return (
    <Wrapper>
      <GoodsInfoWrapper>
        <FormTitleBox>
          <Title>폼 제목*</Title>
          <CommonInput width="100%" />
          <Caption>0/50</Caption>
        </FormTitleBox>

        <LeftAlignBox>
          <LeftTitle>
            대표이미지*<Caption>.jpg, .png, .svg파일만 가능합니다</Caption>
          </LeftTitle>
          <ImgUploader type="file" onChange={handleImgSubmit} />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>카테고리*</LeftTitle>
          <CommonDropDown options={categoryOptions} onSelect={handleSelect} />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>판매 시작일*</LeftTitle>
          <CommonCalender />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>판매 종료일*</LeftTitle>
          <CommonCalender />
        </LeftAlignBox>

        <FormTitleBox>
          <Title>상품 설명*</Title>
          <CommonTextarea />
        </FormTitleBox>

        <FormTitleBox>
          <Title>상품 등록*</Title>
          {itemInputBoxes.map((itemInputBox, index) => (
            <React.Fragment key={index}>{itemInputBox}</React.Fragment>
          ))}
          <CommonButton
            type={'fillGray'}
            size={'l'}
            children={'+'}
            onClick={handleAddItemInputBox}
          />
        </FormTitleBox>
      </GoodsInfoWrapper>
      {isInput && (
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
      )}
    </Wrapper>
  );
};

export default InputGoodsInfo;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
const GoodsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 1.1rem;

  padding-top: 3.6rem;
  gap: 3.6rem;
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
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgUploader = styled.input``;

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 1rem;
  margin-top: 1.6rem;
`;

const DetailInputBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

const ConnectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.6rem;

  margin-top: 1.6rem;
`;
const CheckBoxTitle = styled.div`
  width: 8.6rem;
  color: var(--gray-gray1, #646464);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FormTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;

  color: #bebebe;

  /* Body 4 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
`;

const LeftAlignBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
`;

const LeftTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  color: var(--main, #002472);

  /* Sub Text */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
`;
