"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form = () => {
  const [noteDetail, setNote] = useState({
    title: "",
    description: "",
    author: "",
    color: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("/api/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteDetail),
      });
      setNote({
        title: "",
        description: "",
        author: "",
        color: "",
      });
      setLoading(false);
      router.push("/");
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col items-start gap-4"
      action=""
    >
      <p>Your name:</p>
      <input
        value={noteDetail.author}
        name="author"
        onChange={handleChange}
        type="text"
      />
      <p>Note title:</p>
      <input
        value={noteDetail.title}
        name="title"
        onChange={handleChange}
        type="text"
      />
      <p>Note description:</p>
      <input
        value={noteDetail.description}
        name="description"
        onChange={handleChange}
        type="text"
      />
      <p>Note color:</p>
      <input
        value={noteDetail.color}
        name="color"
        type="color"
        onChange={handleChange}
        id=""
      />
      {loading ? (
        <button disabled className="btn">
          Loading
        </button>
      ) : (
        <button type="submit" className="btn">
          Submit
        </button>
      )}
      <button type="button" className="btn" onClick={() => router.push("/")}>
        Go back
      </button>
    </form>
  );
};

export default Form;
