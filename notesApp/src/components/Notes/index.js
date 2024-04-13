// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
// import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  MainHeading,
  InputContainer,
  InputHeading,
  Textnote,
  Button,
  NotesContainer,
  NoNotesContainer,
  Image,
  NoNotesHeading,
  NoNotesSubHeading,
  UnorderList,
} from './styledComponents'

const Notes = () => {
  const [myarray, setmyarray] = useState([])
  const [title, settitle] = useState('')
  const [mynote, setmynote] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      note: mynote,
    }
    setmyarray(prevState => [...prevState, newNotes])
    settitle('')
    setmynote('')

    // toast.success('Your Notes is Added !', {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // })
  }
  const handletitle = event => {
    settitle(event.target.value)
  }
  const handlenote = event => {
    setmynote(event.target.value)
  }
  console.log(myarray.length)

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <InputContainer onSubmit={handleSubmit}>
        <InputHeading
          value={title}
          onChange={handletitle}
          placeholder="Title"
        />
        <Textnote
          value={mynote}
          onChange={handlenote}
          placeholder="Take a Note..."
          rows={7}
          cols={45}
        />
        <Button type="submit">Add</Button>
      </InputContainer>
      <NotesContainer>
        {myarray.length < 1 ? (
          <NoNotesContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesSubHeading>
              Notes you add will appear here
            </NoNotesSubHeading>
          </NoNotesContainer>
        ) : (
          <UnorderList>
            {myarray.map(each => (
              <NoteItem key={each.id} eachItem={each} />
            ))}
          </UnorderList>
        )}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
