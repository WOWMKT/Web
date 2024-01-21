import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetImageUrl } from '../apis/get/register/useGetImageUrl';
import { usePutImage } from '../apis/post/register/usePutImage';

//이미지 업로드 커스텀 훅
const useImageUploader = (selectedFile) => {
  //img업로딩 관련 state
  const [mode, setMode] = useState('project');
  const [presignedUrl, setPresignedUrl] = useState('');
  const [desiredUrl, setDesiredUrl] = useState('');
  const [uploaded, setUploaded] = useState(false);

  //custom-hook
  const fetchUrl = useGetImageUrl(mode);
  const fetchData = usePutImage();

  //url받아오기
  useEffect(() => {
    if (!fetchUrl.isLoading) {
      setPresignedUrl(fetchUrl.imageUrl);
    }
  }, [fetchUrl.isLoading]);

  //data처리
  const parts = presignedUrl.split('?');
  setDesiredUrl(parts[0]);

  //put
  useEffect(() => {
    if (presignedUrl !== '') {
      fetchData.uploadImage(presignedUrl, selectedFile);
    }
  }, [presignedUrl]);

  setUploaded(true);

  return { uploaded, desiredUrl };
};

export default useImageUploader;
