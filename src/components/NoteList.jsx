import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { TrashIcon } from '@heroicons/react/solid';

const NoteList = ({ notes, onDelete }) => {
  const cardColors = ["bg-gradient-to-r from-blue-500 to-indigo-600", "bg-gradient-to-r from-green-400 to-green-600", "bg-gradient-to-r from-red-500 to-pink-500", "bg-gradient-to-r from-yellow-400 to-yellow-500", "bg-gradient-to-r from-teal-400 to-teal-500", "bg-gradient-to-r from-gray-500 to-gray-600"];

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
  {notes.map((note, index) => (
    <Col key={index}>
      <Card className={`mb-4 rounded-lg overflow-hidden ${cardColors[index % cardColors.length]} text-white`}>
        <Card.Body>
          <h5 className="card-title text-xl font-semibold">{note.title}</h5>
          <p className="card-text mt-2">{note.body}</p>
          <p className="card-text mt-4">
            <small className="text-sm text-gray-300">{formattedDate}</small>
          </p>
          <Button onClick={() => onDelete(note.id)} variant="light" className="mt-4 bg-white text-gray-800 hover:bg-gray-300 hover:text-gray-800 transition duration-300">
            <TrashIcon className="w-6 h-6 mr-2" />
            
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>





  );
};

export default NoteList;
