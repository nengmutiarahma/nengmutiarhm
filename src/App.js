import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TambahCatatan from './TambahCatatan';
import Home from './home';
import Catatan from './Catatan';

function App() {
  const [dataCatatan, setDataCatatan] = useState([
    { title: 'melihat bintang', body: 'malam ini melihat bintang bersama ibu', createdAt: '11/10/2023' },
    { title: 'menggambar abstrak', body: 'Senin sore menggambar abstrak', createdAt: '11/12/2023' },
    { title: 'eksplorasi kota', body: 'Rabu keliling kota mencari tempat baru bersama kawan', createdAt: '11/14/2023' },
  ]);

  const tambahCatatan = (catatan) => {
    setDataCatatan([...dataCatatan, { ...catatan, createdAt: new Date().toLocaleString() }]);
  };

  const hapusCatatan = (index) => {
    const newCatatan = [...dataCatatan];
    newCatatan.splice(index, 1);
    setDataCatatan(newCatatan);
  };

  useEffect(() => {
    document.title = 'Aplikasi Catatan v2';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home dataCatatan={dataCatatan} hapusCatatan={hapusCatatan} />} />
        <Route path="/tambah-catatan" element={<TambahCatatan tambahCatatan={tambahCatatan} />} />
        <Route
          path="/"
          element={
            <React.Fragment>
              {dataCatatan.map((catatan, index) => (
                <Catatan
                  key={index}
                  title={catatan.title}
                  dates={catatan.createdAt}
                  body={catatan.body}
                />
              ))}
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;