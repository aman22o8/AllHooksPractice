// Style your elements here
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainHeading = styled.h1`
  font: normal normal 700 25px;
  font-family: 'Bree Serif';
  color: #4c63b6;
`
// #d8d8d8
const InputContainer = styled.form`
  width: 650px;
  background-color: #ffffff;
  box-shadow: 1px 1px 20px 5px #cbd5e1;
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
`
const InputHeading = styled.input`
  height: 45px;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  width: 80%;
  margin: 10px 0px;
  padding-left: 10px;
`
const Textnote = styled.textarea`
  font: normal normal 400 14px 'Roboto';
  margin: 9px 0px;
  padding-top: 7px;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
`

const Button = styled.button`
  height: 45px;
  width: 95px;
  background-color: #2563eb;
  color: #ffffff;
  font: normal normal 400 18px 'Roboto';
  border-radius: 9px;
  border: none;
  align-self: flex-end;
  margin-right: 25px;
  cursor: pointer;
`
const NotesContainer = styled.div`
  width: 650px;

  position: relative;
  min-height: 380px;
`
const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Image = styled.img`
  height: 90px;
  width: 90px;
`
const NoNotesHeading = styled.h1`
  font: normal normal 700 17px 'Roboto';
  color: #334155;
`

const NoNotesSubHeading = styled.p`
  font: normal normal 500 15px 'Roboto';
  color: #475569;
`
const UnorderList = styled.ul`
  align-self: flex-start;
  justify-self: flex-start;
  margin-top: 10px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export {
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
}
