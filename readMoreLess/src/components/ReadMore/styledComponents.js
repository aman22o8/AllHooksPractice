// Style your elements here
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainHeading = styled.h1`
  font: normal normal 800 30px 'Roboto';
  color: #1e293b;
  font-family: 'Roboto';
`
const SubHeading = styled.p`
  font: normal normal 600 22px 'Roboto';
  color: #334155;
`
const Image = styled.img`
  height: 450px;
  width: 800px;
`

const ParaDesc = styled.p`
  font: normal normal 400 17px 'Roboto';
  color: #334155;
  //   position: relative;
  //   left: -111px;
  width: 804px;
`

const Button = styled.button`
  height: 45px;
  width: 115px;
  background-color: #1f81ff;
  font: normal normal 300 15px 'Roboto';
  color: #ffffff;
  border-radius: 5px;
  border: none;
`
export {MainContainer, MainHeading, SubHeading, Image, ParaDesc, Button}
