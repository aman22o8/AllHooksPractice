// Style your elements here
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  position: relative;
`
const PasswordContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 65px 90px;
  background-color: #35384a;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 317px;
`

const Heading = styled.h1`
  font: normal normal 700 20px;
  font-family: 'Roboto';
  color: #edeeff;
`
const SubHeading = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #edeeff;
`
const ErrorDesc = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #ef4444;
`

const InputHeading = styled.input`
  height: 35px;
  width: 265px;
  border: none;
  outline: none;
  border-radius: 5px;
  line-height: 1.2;
`
export {
  MainContainer,
  PasswordContainer,
  Heading,
  SubHeading,
  ErrorDesc,
  InputHeading,
}
