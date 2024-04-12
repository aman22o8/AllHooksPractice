// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LockedContainer,
  LockImage,
  Description,
  ButtonContainer,
} from './styledComponents'

const Unlock = () => {
  const [locked, setLocked] = useState(true)
  const handleOnClick = () => {
    setLocked(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockedContainer>
        <LockImage
          src={
            locked
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={locked ? 'lock' : 'unlock'}
        />
        <Description>{`${
          locked ? 'Your Device is Locked' : 'Your Device is Unlocked'
        }`}</Description>
        <ButtonContainer type="button" onClick={handleOnClick}>
          {locked ? 'Unlock' : 'Lock'}
        </ButtonContainer>
      </LockedContainer>
    </MainContainer>
  )
}

export default Unlock
