
import NoteCard from "../components/NoteCard";

const Notes = ({ notes }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Notes
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
