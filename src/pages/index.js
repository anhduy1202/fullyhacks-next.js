import Form from "@/components/Form/Form";
import { prisma } from "../../db";

export const getServerSideProps = async () => {
  const notes = await prisma.Note.findMany();
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
};

export default function Home({ notes }) {
  console.log(notes);
  return (
    <section className="m-10 w-[100vw] h-[100vh] flex flex-col gap-8">
      <h1 className="text-[4rem] font-bold"> FullyNotes </h1>
      <p>Notes for everyone</p>
      <Form />
    </section>
  );
}
