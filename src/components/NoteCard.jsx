import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const NoteCard = ({ note,onDelete }) => {
  return (
    <div className="relative bg-white p-5 rounded-xl shadow-md border border-gray-200">
      
      {/* Delete Button */}
      <button
        type="button"
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        onClick={() => onDelete(note.id)}
      >
        <DeleteRoundedIcon />
      </button>

      <h2 className="text-xl font-bold text-gray-800 mb-2 pr-8">
        {note.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {note.description}
      </p>

    </div>
  );
};

export default NoteCard;