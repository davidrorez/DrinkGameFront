import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from '@mui/material';

const ListChallenges = ({ contents, handleNew, handleEdit, handleDelete }) => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    setChallenges(contents);
  }, [contents]);


  return (
    <div style={{ margin: '15px' }}>
      {!contents || contents.length === 0 ? <p>No hay datos</p> : ''}
      <Button
        style={{
          backgroundColor: 'green',
          textTransform: 'none',
          float: 'right'
        }}
        variant="contained"
        onClick={handleNew}
      >
        Nuevo reto
      </Button>
      <h3 className="mb-3">Lista de retos</h3>
      <Table striped responsive size='lg'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripción del reto</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {challenges.map(({ id, challengecol }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{challengecol}</td>
              <td>
                <Button
                  style={{
                    backgroundColor: 'blue',
                    textTransform: 'none'
                  }}
                  variant="contained"
                  onClick={() => handleEdit(id, challengecol)}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button
                  style={{
                    backgroundColor: 'red',
                    textTransform: 'none'
                  }}
                  variant="contained"
                  onClick={() => handleDelete(id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListChallenges;
