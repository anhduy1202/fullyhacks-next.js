import { useRouter } from "next/navigation";
import React from "react";

const Form = () => {
  const router = useRouter();
  return (
    <form action="">
      <p>Your name:</p>
      <input type="text" />
      <p>Note title:</p>
      <input type="text" />
      <p>Note description:</p>
      <input type="text" />
      <p>Note color:</p>
      <input type="color" name="" id="" />
      <button type="submit">Submit</button>
      <button type="button" className="btn" onClick={() => router.push("/")}>
        Go back
      </button>
    </form>
  );
};

export default Form;
