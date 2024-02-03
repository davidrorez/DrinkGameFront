import React, { useState, useEffect, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";

const ListAdmins = ({
  contents,
  userInfo,
  handleNew,
  handleEdit,
  handleDelete,
  isDarkMode
}) => {
  const [admins, setAdmins] = useState([]);
  const bgColorDark = isDarkMode();

  const filteredAdmins = useMemo(() => {
    if (!contents || contents.length === 0) return [];
    return contents.filter((admin) => admin.rol === userInfo.rol);
  }, [contents, userInfo]);

  useEffect(() => {
    setAdmins(filteredAdmins);
  }, [filteredAdmins]);

  if (!contents || contents.length === 0) return <p>No hay Datos</p>;

  return (
    <div>
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
        Nuevo {userInfo.one}
      </Button>
      <div className={`mt-8 bg-${bgColorDark ? 'dark' : 'white'} p-4 shadow rounded-lg`}>
        <h3 className="text-gray-500 text-lg font-semibold pb-4">
          Lista de {userInfo.other}
        </h3>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <Table responsive variant={bgColorDark ? 'dark' : 'white'} className="text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Id
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Nombre
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Correo
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Rol
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"></th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            {admins.map(({ id, name, email }) => (
              <tr className="hover:bg-grey-lighter" key={id}>
                <td className="py-2 px-4 border-b border-grey-light">{id}</td>
                <td className="py-2 px-4 border-b border-grey-light">{name}</td>
                <td className="py-2 px-4 border-b border-grey-light">{email}</td>
                <td className="py-2 px-4 border-b border-grey-light">{userInfo.one}</td>
                <td className="py-2 px-4 border-b border-grey-light">
                  <Button
                    style={{
                      backgroundColor: "blue",
                      textTransform: "none",
                    }}
                    variant="contained"
                    onClick={() => handleEdit(id)}
                  >
                    Editar
                  </Button>
                </td>
                <td className="py-2 px-4 border-b border-grey-light">
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: email === 'admin@admin.com' ? 'rgba(255, 0, 0, 0.5)' : 'red',
                      textTransform: 'none',
                    }}
                    variant="contained"
                    disabled={email === 'admin@admin.com'}
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

export default ListAdmins;
