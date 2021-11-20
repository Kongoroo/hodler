import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
}

const Container = (props: ContentProps) => {
  const { children } = props;
  return <StyledCalculatorContainer>{children}</StyledCalculatorContainer>;
};

export default Container;

const StyledCalculatorContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto 30px auto;
  width: 80%;
  && h1 {
    margin: 0 0 16px 0;
  }
`;
