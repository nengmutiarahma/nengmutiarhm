import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { addNote } from "../utils/network";
import Form from "../components/Form";


const AddNotePage = () => {
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: "",
    createdAt: new Date(),
    body: "",
  });

  const onHandleChangeNote = (field, value) => {
    setNote({ ...note, [field]: value });
  };

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(note);
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center">
      
      <Card className="bg-white p-3">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-4">Create New Note</h1>
        <Form
          onSubmit={onSubmitHandler}
          onChange={onHandleChangeNote}
          title={note.title}
          body={note.body}
        />
      </Card>
    </div>
  );
};

export default AddNotePage;