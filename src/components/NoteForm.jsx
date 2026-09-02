import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form onSubmit={onsubmit} className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Note</h2>

        {/* Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>

          <textarea
            id="desc"
            rows={5}
            placeholder="Type your note here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       outline-none resize-none focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg
                     font-medium hover:bg-blue-700 transition"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
