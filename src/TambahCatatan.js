import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const TambahCatatan = ({ tambahCatatan }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsDisabled(!(title.trim() !== '' && body.trim() !== ''));
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    tambahCatatan({ title, body });
    navigate('/');
  };

  return (
    <Container>
      <h1 className="mt-3">Tambah Catatan</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="judulCatatan">
          <Form.Label>Judul Catatan:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukkan judul catatan"
          />
        </Form.Group>
        <Form.Group controlId="isiCatatan">
          <Form.Label>Isi Catatan:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Masukkan isi catatan"
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isDisabled}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default TambahCatatan;
