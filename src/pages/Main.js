import styled from 'styled-components';
import boyAndCat from '../assets/boyAndCat.svg';
import ColorButton from '../components/ColorButton';

function Main() {
  return (
    <MainWrapper>
      <MainImg src={boyAndCat} />
      <Title>Get things done with TODo</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore!
        Animi nemo aut atque, deleniti nihil dolorem repellendus.
      </SubTitle>
      <ButtonWrapper>
        <ColorButton name="Get started" />
      </ButtonWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 2px);
`;

const MainImg = styled.img`
  margin-top: 25%;
  margin-bottom: 42px;
`;

const Title = styled.div`
  font-size: var(--font-size-large);
`;

const SubTitle = styled.div`
  font-size: var(--font-size-small);
  opacity: var(--main-font-opacity);
  width: 242px;
  margin-top: 33px;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 55px;
`;
export default Main;
