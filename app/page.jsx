"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Notes from "./components/Notes/Notes";
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllNotes = async () => {
      setLoading(true);
      const res = await fetch("/api/notes");
      const data = await res.json();
      setLoading(false);
      setNotes(data);
    };
    fetchAllNotes();
  }, []);
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-[4rem] font-bold"> FullyNotes </h1>
      <p>Notes for everyone</p>
      <Link className="btn" href={"/create-note"}>
        Create your note
      </Link>
      {loading && <p>Loading...</p>}
      <Notes notes={notes} />
    </section>
  );
}
