import React, { useState } from 'react';
import Catatan from './Catatan';
import { Button, Container, Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ dataCatatan, hapusCatatan }) => {
  const [search, setSearch] = useState('');

  const filteredCatatan = dataCatatan.filter((catatan) =>
    catatan.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1 className="mt-3">Daftar Catatan</h1>
      <Link to="/tambah-catatan">
        <Button variant="primary" className="mb-3">Tambah Catatan</Button>
      </Link>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Cari berdasarkan judul"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <Row>
        {filteredCatatan.map((catatan, index) => (
          <Col key={index} md={4} className="mb-3">
            <div className="border p-3">
              <h4>{catatan.title}</h4>
              <p>{catatan.createdAt}</p>
              <p>{catatan.body}</p>
              <Button variant="danger" onClick={() => hapusCatatan(index)} className="mt-2">
                Hapus
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
