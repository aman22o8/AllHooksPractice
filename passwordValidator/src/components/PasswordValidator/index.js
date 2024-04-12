// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  SubHeading,
  ErrorDesc,
  InputHeading,
} from './styledComponents'

const PasswordValidator = () => {
  const [pass, setPass] = useState('')
  const [count, setCount] = useState(0)

  const handleOnChange = event => {
    setPass(event.target.value)
  }
  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <SubHeading>Check how strong and secure is your password</SubHeading>
        <InputHeading type="password" value={pass} onChange={handleOnChange} />
        <ErrorDesc>
          {pass.length < 8 && 'Your password must be at least 8 characters'}
        </ErrorDesc>
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
