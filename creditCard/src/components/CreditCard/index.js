// Write your code here
import {useState} from 'react'
import {
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
} from './styledComponents'

const CreditCard = () => {
  //   const [detail, setdetail] = useState({cardnumber: '', username: ''})
  //   const handleChange = event => {
  //     const {name, value} = event.target
  //     setdetail(prevState => ({...prevState, [name]: value}))
  //   }
  const [name, setname] = useState('')
  const [number, setnumber] = useState('')

  const handleChangeNumber = event => {
    setnumber(event.target.value)
  }
  const handleChangeName = event => {
    setname(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <LeftHeading>CREDIT CARD</LeftHeading>
        <HorizontalLine />
        <CreditImageContainer data-testid="creditCard">
          <CardNumber>
            {/* {number.length > 0 &&
              `${number.slice(0, 4)} / ${number.slice(4, 8)} / ${number.slice(
                8,
                12,
              )}`} */}
            {number}
          </CardNumber>
          <NameContainer>
            <NameHeading>CARDHOLDER NAME</NameHeading>
            <Cardusername>{name.toUpperCase()}</Cardusername>
          </NameContainer>
        </CreditImageContainer>
      </LeftContainer>
      <RightContainer>
        <InputContainer>
          <Paymentmethodheading>Payment Method</Paymentmethodheading>
          <InputTypes
            type="text"
            value={number}
            onChange={handleChangeNumber}
            placeholder="Card Number"
            // name="cardnumber"
          />
          <InputTypes
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Cardholder Name"
            // name="username"
          />
        </InputContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
