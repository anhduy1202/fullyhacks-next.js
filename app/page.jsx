import Link from "next/link";
import { prisma } from "../db";
import Form from "./components/Form/Form";

const fetchAllNotes = async () => {
  const notes = await prisma.Note.findMany();
  return notes;
};

export default async function Home() {
  const data = await fetchAllNotes();
  console.log(data);
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-[4rem] font-bold"> FullyNotes </h1>
      <p>Notes for everyone</p>
      <Link href={"/create-note"}> Create your note</Link>
    </section>
  );
}
