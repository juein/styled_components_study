import React from 'react';
import styled, { createGlobalStyle  } from 'styled-components';

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Button green>green</Button>
      <Button className="fs20">pink</Button>
    </Container>
    </>
  );
}

// styled components는 해당 컴포넌트에만 스타일이 적용된다.
// injectGlobal 사용시 공통으로 적용될 스타일을 지정할 수 있다.
// v4부터 injectGlobal이 createGlobalStyle 로 대체되었다.
const GlobalStyle  = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background: #ffeaa7;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 0;
  outline: none;
  background: ${props => props.green ? '#00cec9' : '#ff7675'};
  &.fs20{
    font-size: 20px;
  }
  
`;

export default App;
