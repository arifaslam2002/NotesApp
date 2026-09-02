import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      description,
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F6F3EC] p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg border border-[#2B2438]/10 bg-white p-8 shadow-[0_1px_2px_rgba(43,36,56,0.08)]"
      >
        <h2 className="mb-6 text-2xl font-semibold text-[#2B2438]">
          New note
        </h2>

        <div className="mb-5">
          <label htmlFor="title" className="mb-2 block text-sm text-[#2B2438]/70">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's this about?"
            className="w-full border-b border-[#2B2438]/20 bg-transparent px-1 py-2 text-[#2B2438] outline-none transition focus:border-[#D4A017]"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="desc" className="mb-2 block text-sm text-[#2B2438]/70">
            Description
          </label>
          <textarea
            id="desc"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type your note here..."
            className="w-full resize-none border-b border-[#2B2438]/20 bg-transparent px-1 py-2 text-[#2B2438] outline-none transition focus:border-[#D4A017]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2B2438] py-3 font-medium text-[#F6F3EC] transition hover:bg-[#3a3049]"
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;