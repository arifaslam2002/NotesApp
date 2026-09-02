import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const NoteCard = ({ note, onDelete, tilt = "" }) => {
  return (
    <div
      className={`group relative border border-[#2B2438]/10 bg-white p-5 shadow-[0_1px_2px_rgba(43,36,56,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(43,36,56,0.12)] ${tilt}`}
    >
      {/* tape accent */}
      <span className="absolute -top-2 left-6 h-4 w-10 -rotate-2 bg-[#D4A017]/40" />

      <button
        type="button"
        onClick={() => onDelete(note.id)}
        className="absolute top-3 right-3 text-[#2B2438]/30 opacity-0 transition group-hover:opacity-100 hover:text-[#B3492B]"
        aria-label="Delete note"
      >
        <DeleteRoundedIcon fontSize="small" />
      </button>

      <h2 className="mb-2 pr-6 text-lg font-semibold text-[#2B2438]">
        {note.title}
      </h2>

      <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2B2438]/70">
        {note.description}
      </p>
    </div>
  );
};

export default NoteCard;