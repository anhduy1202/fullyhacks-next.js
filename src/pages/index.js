import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <section className="m-10 w-[100vw] h-[100vh] flex flex-col gap-8">
      <h1 className="text-[4rem] font-bold"> FullyNotes </h1>
      <p>Notes for everyone</p>
      <Form />
    </section>
  );
}
