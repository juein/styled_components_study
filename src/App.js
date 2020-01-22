import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Button green>green</Button>
      <Button className="fs20">pink</Button>
    </Container>
  );
}

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
