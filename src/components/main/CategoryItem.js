import styled from 'styled-components';
const CategoryItem = ({ category }) => {
  return (
    <CategoryItemWrapper>
      <CaptionTag>{category}</CaptionTag>
    </CategoryItemWrapper>
  );
};
export default CategoryItem;

const CategoryItemWrapper = styled.div``;
const CaptionTag = styled.div`
  width: 9rem;
  display: flex;
  justify-content: center;
  color: var(--black, #000);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  border: 1px solid #75a1ff;
  padding: 1rem;
  border-radius: 3rem;
`;
