import Link from "next/link";

export default async function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-[4rem] font-bold"> FullyNotes </h1>
      <p>Notes for everyone</p>
      <Link href={"/create-note"}> Create your note</Link>
    </section>
  );
}
