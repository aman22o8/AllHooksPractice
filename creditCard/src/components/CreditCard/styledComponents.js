// Style your elements here
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
`
const LeftContainer = styled.div`
  height: 100%;
  background-color: #3b4b69;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RightContainer = styled.div`
  height: 100%;
  background-color: #ffffff;
  width: 65%;
  position: relative;
`

const LeftHeading = styled.h1`
  font: normal normal 800 38px 'Roboto';
  color: #ffffff;
  margin-bottom: 9px;
`
const HorizontalLine = styled.hr`
  border-top: 4px solid #ffd773;
  width: 242px;
  outline: none;
  border-radius: 5px;
`
const CreditImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  margin-top: 38%;
  width: 90%;
  height: 288px;
  border-radius: 28px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0px;
`
const CardNumber = styled.p`
  font: normal normal 800 22px 'Roboto';
  color: #ffffff;
  margin-left: 37px;
`
const NameContainer = styled.div`
  //   background-color: cyan;
  padding-left: 37px;
`
const NameHeading = styled.p`
  font: normal normal 400 15px 'Roboto';
  color: #ffffff;
`
const Cardusername = styled.p`
  font: normal normal 800 18px 'Roboto';
  color: #ffffff;
`
const InputContainer = styled.div`
  border-radius: 22px;
  border: none;
  box-shadow: 0px 2px 25px -3px #475569;
  height: 288px;
  width: 445px;
  position: absolute;
  top: 38%;
  left: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Paymentmethodheading = styled(LeftHeading)`
  color: #344e7a;
  font-size: 22px;
  margin: 25px 0px;
`
const InputTypes = styled.input`
  height: 45px;
  width: 80%;
  margin-top: 22px;
  margin-bottom: 9px;
  outline: none;
  border: 1px solid #c3cad9;
  border-radius: 5px;
`

export {
  MainContainer,
  LeftContainer,
  RightContainer,
  LeftHeading,
  HorizontalLine,
  CreditImageContainer,
  CardNumber,
  NameContainer,
  NameHeading,
  Cardusername,
  InputContainer,
  Paymentmethodheading,
  InputTypes,
}
