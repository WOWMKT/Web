import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '.';

export const UseGetProjectList = (
  pageType,
  searchTerm = '',
  pageNo = 1,
  orderBy = 'view',
  univ = 'allUniv'
) => {
  let url = '';
  if (pageType === 'demand' && searchTerm === '') {
    url = `demand/home?pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`;
  } else if (pageType === 'demand' && searchTerm !== '') {
    url = `demand?search=${searchTerm}&pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`;
  } else if (pageType === 'selling' && searchTerm !== '') {
    url = `sale?search=${searchTerm}&pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`;
  } else if (pageType === 'selling' && searchTerm === '') {
    url = `sale/home?pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['getProjectList'],
    queryFn: async () => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });

  return {
    getProjectList: data || null,
    isLoading,
    error,
  };
};
