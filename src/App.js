import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

function App() {
  // state 변수와, 해당 변수를 갱신할 수 있는 함수 두개를 선언한다.
  const [duration, setDuration] = useState(5);

  return (
    <>
    <GlobalStyle />
    <Container>
      <Button green>green</Button>
      <Button className="fs20">pink</Button>
      <ButtonTypeTwo>ButtonTypeTwo</ButtonTypeTwo>
      <Atag href="#">Atag</Atag>
      <InputButton button value="inputBtn" />
      <Rotation></Rotation>
      <Rotation red></Rotation>
    </Container>

    <Container>
      <p>duration state val : {duration}</p>
      <button type="button" onClick = {() => setDuration(duration + 1)}>plus</button>
      <button type="button" onClick = {() => setDuration(duration - 1)}>minus</button>
      <AppointDuration duration={duration}></AppointDuration>
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

//extend
const ButtonTypeTwo = styled(Button)`
  color: #fff;
`;

//extend && tag변경
const Atag = styled(Button.withComponent("a"))`
  color: #fff;
  padding: 10px;
`
// input type button
const InputButton = styled.input.attrs(props => ({
  type: "button",
}))`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  outline: none;
  border-width: 0;
`;


//animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotation = styled.div`
  outline: 1px solid ${props => props.red ? "#ff6600" : "#000"};
  width: 100px;
  height: 10px;
  display: inline-block;

  ${props => {
    if (props.red) {
      return css `animation: ${rotate} 2s linear infinite `;
    }else {
      return css `animation: ${rotate} 2s linear infinite reverse`;
    }
  }}
`;

const AppointDuration = styled(Rotation)`
  ${props => {
    return css `animation-duration : ${props.duration}s;`; 
  }};
`;

export default App;
