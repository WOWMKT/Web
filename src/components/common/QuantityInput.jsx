import styled from 'styled-components';

export default function QuantityInput({ quantity, onClick }) {
  return (
    <Wrapper>
      <Counter>
        <StyledButton
          type="button"
          aria-label="수량 내리기"
          onClick={() => onClick(-1)}
        >
          -
        </StyledButton>
        <StyledInput
          width={'2.5rem'}
          type="number"
          min={1}
          value={quantity}
          readOnly
        />
        <StyledButton
          type="button"
          aria-label="수량 올리기"
          onClick={() => onClick(1)}
        >
          +
        </StyledButton>
      </Counter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Counter = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  /* Add your custom button styles here */
  background-color: #ddd;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  /* Add more styles as needed */
`;

const StyledInput = styled.input`
  /* Add your custom input styles here */
  width: ${(props) => props.width || 'auto'};
  padding: 0.5rem;
  font-size: 1rem;

  border: none;

  /* Add more styles as needed */
`;
