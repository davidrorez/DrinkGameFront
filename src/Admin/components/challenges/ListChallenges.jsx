import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from '@mui/material';
import { getIsDarkMode } from '../../../App';

const ListChallenges = ({ contents, handleNew, handleEdit, handleDelete }) => {
  const [challenges, setChallenges] = useState([]);
  const bgColorDark = getIsDarkMode();

  useEffect(() => {
    setChallenges(contents);
  }, [contents]);


  return (
    <div>
      {!contents || contents.length === 0 ? <p>No hay datos</p> : ''}
      <Button
        className="m-4"
        style={{
          backgroundColor: "green",
          textTransform: "none",
          float: "right",
        }}
        variant="contained"
        onClick={handleNew}
      >
        Nuevo reto
      </Button>
      <div className={`mt-8 bg-${bgColorDark ? 'dark' : 'white'} p-4 shadow rounded-lg`}>
        <h3 className="text-gray-500 text-lg font-semibold pb-4">
          Lista de retos
        </h3>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <Table responsive variant={bgColorDark ? 'dark': 'white'} className="text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Id</th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Descripción del reto</th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"></th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            {challenges.map(({ id, challengecol }) => (
              <tr className="hover:bg-grey-lighter" key={id}>
                <td className="py-2 px-4 border-b border-grey-light">{id}</td>
                <td className="py-2 px-4 border-b border-grey-light">{challengecol}</td>
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
        <div className="text-right mt-4">
          <Button
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4"
            style={{
              textTransform: "none",
            }}
            variant="contained"
          >
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListChallenges;
