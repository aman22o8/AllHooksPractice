// Style your elements here
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  position: relative;
`
const LockedContainer = styled.div`
  height: 58vh;
  //   border: 1px solid red;
  width: 270px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  align-items: center;
`
const LockImage = styled.img`
  height: 180px;
  width: 180px;
`
const Description = styled.p`
  font: normal normal 500 25px;
  font-family: 'Roboto';
  color: #e2e8f0;
  margin-top: 21%;
  margin-bottom: 55%;
`
const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 9px;
  height: 35px;
  width: 105px;
  background-color: #06b6d4;
  color: #ffffff;
  font: normal normal 600 15px;
  font-family: 'Roboto';
  transition: all 0.5s ease-out;
  &:hover {
    // height: 40px;
    width: 115px;
    background-color: #055e85;
    color: #e2e8f0;
  }
`

export {MainContainer, LockedContainer, LockImage, Description, ButtonContainer}
