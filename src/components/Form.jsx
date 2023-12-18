import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row } from 'react-bootstrap';
import { ButtonDefault, ButtonDisabled } from './Button';

const Form = ({ onSubmit, onChange, title, createdAt, body }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
  <div className="mb-4">
    <label className="text-lg text-blue-500 font-semibold">Judul:</label>
    <input
      onChange={(event) => onChange('title', event.target.value)}
      type="text"
      value={title}
      placeholder="Contoh: Mau ngapain"
      required
      className="input-field"
    />
  </div>

  <div className="mb-4">
    <label className="text-lg text-blue-500 font-semibold">Isi Catatan:</label>
    <textarea
      onChange={(event) => onChange('body', event.target.value)}
      type="text"
      value={body}
      rows={4}
      required
      className="input-field"
    />
  </div>

      {title && body ? (
        <ButtonDefault type="submit">
          Submit
        </ButtonDefault>
      ) : (
        <ButtonDisabled variant="secondary" disabled>
          Submit
        </ButtonDisabled>
      )}
      <Row>
        <Link to="/">
              <Button variant="secondary">
                Home
              </Button>
            </Link>
      </Row>
    </form>
  );
};

export default Form;