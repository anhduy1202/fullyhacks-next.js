import React from "react";
import Note from "./Note";

const Notes = ({ notes }) => {
  return (
    <div className="note-container">
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
