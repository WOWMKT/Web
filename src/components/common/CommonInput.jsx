import styled, { css } from 'styled-components';

//props: placeholder, type(off,on), width

const CommonInput = ({
  type = 'off',
  width = '100%',
  size = 's',
  value = '',
  onChange = {},
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      width={width}
      size={size}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default CommonInput;

const StyledInput = styled.input`
  /* size가 s :default*/
  width: ${(props) => (props.width ? props.width : '32.5rem')};
  padding: 1rem;
  align-items: center;
  border-radius: 0.5rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;

  /* size에 따른 스타일 변경 */
  ${(props) =>
    props.size === 'l' &&
    css`
      height: 4.8rem;
      font-size: 1.4rem;
      font-weight: 400;
    `}

  &::placeholder {
    color: var(--gray-gray1, #646464);
  }

  /* type에 따른 스타일 변경 */
  ${(props) =>
    props.type === 'off' &&
    css`
      border: 1px solid var(--gray-gray3, #c1c1c1);
    `}
  ${(props) =>
    props.type === 'on' &&
    css`
      border: 1px solid var(--sub3, #75a1ff);
    `}

  background-color:white;
`;
