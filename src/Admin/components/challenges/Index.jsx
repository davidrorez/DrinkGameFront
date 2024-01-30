import React, { useState, useEffect } from 'react';
import { getFetch, postFetch, putFetch, deleteFetch } from '../../../commons/ApiMethods';
import LoadingState from '../../../commons/LoadingState';
import ListChallenges from '../challenges/ListChallenges';
import Swal from 'sweetalert2';

function IndexChallenges() {
  const LoadingList = LoadingState(ListChallenges);
  const [refresh, setRefresh] = useState(true);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!refresh) return;
    setLoading(true);
    getFetch('challenge').then((data) => {
      setContents(data);
      setLoading(false);
    });
    setRefresh(false);
  }, [setContents, setLoading, refresh]);

  const handleNew = async () => {
    const { value: description, isConfirmed } = await Swal.fire({
      title: 'Ingresa el nuevo reto',
      input: 'text',
      inputLabel: 'Descripción',
      confirmButtonText: 'Ok',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'No puede ser en blanco!';
        }
      },
    });

    if (isConfirmed) {
      try {
        const response = await postFetch('challenge', { challengecol: description });
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
          return;
        } else {
          setRefresh(true);
          Swal.fire('El reto se creó exitosamente!', '', 'success');
        }
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error al comunicarse con el servidor.', 'error');
      }
    }
  };

  const handleEdit = async (id, descriptionEdit) => {
    const { value: newDescription, isConfirmed } = await Swal.fire({
      title: 'Edita el reto',
      input: 'text',
      inputValue: descriptionEdit,
      inputLabel: 'Descripción',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'No puede ser en blanco!'
        }
      }
    });
    if (isConfirmed) {
      try {
        const response = await putFetch(`challenge/${id}`, { challengecol: newDescription })
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
          return;
        } else {
          setRefresh(true);
          Swal.fire('El reto se actualizó existosamente!', '', 'success');
        }
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error al comunicarse con el servidor.', 'error');
      }
    }
  };

  const handleDelete = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: 'Estás seguro que quieres eliminar?',
      showCancelButton: true,
      confirmButtonText: 'Ok',
    })
    if (isConfirmed) {
      try {
        const response = await deleteFetch(`challenge/${id}`)
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
          return;
        } else {
          if (response.notFound) {
            Swal.fire('Error', 'El ID no existe en la base de datos', 'error');
            setLoading(false);
          } else {
            setRefresh(true);
            Swal.fire('Eliminado exitosamente!', '', 'success')
          }
        }
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error al comunicarse con el servidor.', 'error');
      }
    }
  };

  return (
    <div>
      <LoadingList
        isLoading={loading}
        contents={contents}
        handleNew={handleNew}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default IndexChallenges;