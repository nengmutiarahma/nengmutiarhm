// FormLoginAndRegis.js
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { BsPerson, BsLock } from "react-icons/bs";
import { ButtonDefault, ButtonDisabled } from '../components/Button';

function FormLoginAndRegis({ onSubmit, username, password, setUsername, setPassword, isSubmitDisabled }) {
  return (
    <Form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <Form.Group controlId="formUsername" className="mb-4">
        <Row className="items-center">
          <Col xs={1}>
            <BsPerson size={20} />
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required
              maxLength={50} 
              className="border-2 border-gray-300 p-2 w-full rounded"
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-4">
        <Row className="items-center">
          <Col xs={1}>
            <BsLock size={20} />
          </Col>
          <Col xs={10}>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
              maxLength={50} 
              className="border-2 border-gray-300 p-2 w-full rounded"
            />
          </Col>
        </Row>
      </Form.Group>

      {/* Submit Button */}
      <Row className="justify-content-center mb-3">
        <Col xs={10}>
          {username && password ? (
            <ButtonDefault type="submit" block disabled={isSubmitDisabled} className="bg-blue-500 text-white p-2 rounded">
              Submit
            </ButtonDefault>
          ) : (
            <ButtonDisabled disabled block className="bg-gray-400 text-white p-2 rounded">
              Submit
            </ButtonDisabled>
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default FormLoginAndRegis;