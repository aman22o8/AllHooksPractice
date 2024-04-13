// Write your code here
import {ListContainerMain, ListHeading, ListDesc} from './styledComponents'

const NoteItem = props => {
  const {eachItem} = props
  const {title, note} = eachItem

  return (
    <ListContainerMain>
      <ListHeading>{title}</ListHeading>
      <ListDesc>{note}</ListDesc>
    </ListContainerMain>
  )
}

export default NoteItem
