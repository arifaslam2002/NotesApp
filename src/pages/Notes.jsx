import NoteCard from "../components/NoteCard";

const Notes = ({ notes, onDelete }) => {
  return (
    <div className="min-h-screen bg-[#F6F3EC] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-[#2B2438]">
          My notes
        </h1>

        {notes.length === 0 ? (
          <p className="text-[#2B2438]/50">
            Nothing here yet — create your first note to get started.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note, i) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={onDelete}
                tilt={i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-0" : "rotate-1"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;