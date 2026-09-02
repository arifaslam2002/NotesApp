import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import { useState } from "react";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((previousNotes) => [...previousNotes, newNote]);
  };
  const deleteNote = (id) => {
    setNotes((previousNotes) =>
      previousNotes.filter((notes) => notes.id != id),
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateNote onAddNote={addNote} />} />
          <Route path="/create" element={<CreateNote onAddNote={addNote} />} />
          <Route path="/notes" element={<Notes notes={notes} onDelete={deleteNote} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
