import NoteForm from "../components/NoteForm"

const CreateNote = ({onAddNote}) => {
  return (
    <div><NoteForm onAddNote={onAddNote}/></div>
  )
}

export default CreateNote