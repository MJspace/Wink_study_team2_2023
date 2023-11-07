import styled from 'styled-components';

function ColorButton(props) {
  const { name } = props;
  return <ButtonWrapper>{name}</ButtonWrapper>;
}

const ButtonWrapper = styled.div`
  width: 220px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: var(--highlight-color);
  color: #fff;
  font-size: var(--font-size-medium);
  cursor: pointer;
`;

export default ColorButton;
