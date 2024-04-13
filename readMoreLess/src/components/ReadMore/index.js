// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  SubHeading,
  Image,
  ParaDesc,
  Button,
} from './styledComponents'

const ReadMore = prop => {
  const {reactHooksDescription} = prop
  const [toggle, settoggle] = useState(false)
  const handleClick = () => {
    settoggle(prevState => !prevState)
  }
  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />

      <ParaDesc>
        {toggle
          ? reactHooksDescription.slice(0)
          : `${reactHooksDescription.slice(0, 169)}.........`}
      </ParaDesc>

      <Button onClick={handleClick} type="button">
        {toggle ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
