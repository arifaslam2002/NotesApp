
const NoteCard = ({notes}) => {
  return (
    
    <div>
    <h2>{notes.title}</h2>
    <p>{notes.description}</p>
    </div>
  )
}

export default NoteCard