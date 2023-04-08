import React from "react";
import ReactTimeago from "react-timeago";

const Note = ({ note }) => {
  const { id, title, description, createdAt, author, color } = note;
  return (
    <div style={{ backgroundColor: color }} className="note">
      <p className="text-xl font-bold">{title}</p>
      <p>{description}</p>
      <p>By: {author}</p>
      <ReactTimeago className="text-sm" date={createdAt} />
    </div>
  );
};

export default Note;
