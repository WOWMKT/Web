import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import CommonDropDown from '../common/CommonDropDown';
import CommonTextarea from '../common/CommonTextarea';
import ItemInputBox from './ItemInputBox';
import { useGetImageUrl } from '../../apis/get/register/useGetImageUrl';
import { usePutImage } from '../../apis/post/register/usePutImage';
import axios from 'axios';
import axiosInstance from '../../apis';
import Calendar from '../common/Calendar';

const InputGoodsInfo = ({
  handleMoveNext,
  handleMoveBefore,
  isInput = false,
  handleInputChange,
}) => {
  const categoryOptions = [
    { value: '1번', label: '1번' },
    { value: '2번', label: '2번' },
    { value: '3번', label: '3번' },
  ];
  const [projectName, setProjectName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  //const [image1, setImage1] = useState('');
  const [itemList, setItemList] = useState([]);

  //img관련 state
  const [mode, setMode] = useState('project');
  const [isImgUpdate, setIsImgUpdate] = useState(false);
  const [presignedUrl, setPresignedUrl] = useState('');
  const [desiredUrl, setDesiredUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelect = (selectedOption) => {
    setCategoryId(
      categoryOptions.findIndex(
        (option) => option.value === selectedOption.value
      ) + 1
    );
    handleInputChange('categoryId', categoryId);
  };

  //itemList처리
  const addItem = (newItem) => {
    setItemList((prevItems) => [...prevItems, newItem]);
  };

  useEffect(() => {
    handleInputChange('item', itemList);
  }, [itemList]);

  //custom-hook
  const fetchedUrl = useGetImageUrl(mode); //대표이미지 들어갈 url
  // const fetchData = usePutImage();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };

  //이미지 업로드 관련
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
      handleImgUploader(selectedFile);
    }
  }, [isImgUpdate]);

  useEffect(() => {
    if (desiredUrl !== '') {
      console.log(desiredUrl);
      setThumbnail(desiredUrl);
      handleInputChange('thumbnail', desiredUrl);
    }
  }, [desiredUrl]);

  //날짜 처리
  const handleStartDateChange = (e) => {
    setStartDate(e);
    handleInputChange('startDate', e);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e);
    handleInputChange('endDate', e);
  };

  return (
    <Wrapper>
      <GoodsInfoWrapper>
        <FormTitleBox>
          <Title>폼 제목*</Title>
          <CommonInput
            width="100%"
            name="sellerName"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
              onInputChange(e);
            }}
          />
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
          <LeftTitle>판매 기간*</LeftTitle>
          <Calendar
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
          />
        </LeftAlignBox>

        <FormTitleBox>
          <Title>상품 설명*</Title>
          <CommonTextarea
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              onInputChange(e);
            }}
          />
        </FormTitleBox>

        <FormTitleBox>
          <Title>상품 등록*</Title>
          {/* 등록 상품 띄우기*/}
          {itemList.length > 0 && (
            <>
              {itemList.map((item, index) => (
                <ItemWrapper key={index}>
                  {`상품명: ${item.item_name}   가격: ${item.price}   재고: ${item.goal}`}
                </ItemWrapper>
              ))}
            </>
          )}

          <ItemInputBox addItem={addItem} />
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

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
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
