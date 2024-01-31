import React, { useState, useEffect } from 'react';
import { getFetch, postFetch, putFetch, deleteFetch } from '../../../../commons/ApiMethods';
import LoadingState from '../../../../commons/LoadingState';
import List from '../../list/List';
import Swal from 'sweetalert2';
import { getIsDarkMode } from '../../../../App';

export const IndexAdmins = () => {
  const LoadingList = LoadingState(List);
  const [refresh, setRefresh] = useState(true);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  const userInfo = {
    rol: 1,
    one: 'Admin',
    other: 'Administradores'
  }

  useEffect(() => {
    if (!refresh) return;
    setLoading(true);
    getFetch('user').then((data) => {
      setContents(data);
      setLoading(false);
    });
    setRefresh(false);
  }, [setContents, setLoading, refresh]);

  const handleNew = async () => {
    const { value, isConfirmed } = await Swal.fire({
      title: `Datos del ${userInfo.one}`,
      showCancelButton: true,
      html:
        '<p class="m-1 p-0">Nombre</p>' +
        '<input id="swal-input1" class="swal2-input m-1" placeholder="Nombre"> ' +
        '<p class="mt-4 mb-1 p-0">Correo Electrónico</p>' +
        '<input id="swal-input2" class="swal2-input m-1" placeholder="Email" type="text">' +
        '<p class="mt-4 mb-1 p-0">Contraseña</p>' +
        '<input id="swal-input3" class="swal2-input m-1" placeholder="Contraseña" type="password">',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const email = document.getElementById('swal-input2').value;
        const password = document.getElementById('swal-input3').value;

        if (!name || !email || !password) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
          Swal.showValidationMessage('El formato del correo electrónico es inválido');
        }
        return { name, email, password };
      },
    });
    if (isConfirmed) {
      try {
        const response = await postFetch('user', {
          user: {
            name: value.name,
            email: value.email,
            rol: userInfo.rol,
            password: value.password,
          },
        })
        if (response.duplicated) {
          Swal.fire('Error', 'Ya existe una cuenta con ese correo!', 'error');
          return;
        }
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
        } else {
          setRefresh(true);
          Swal.fire(`El ${userInfo.one} se creó exitosamente!`, '', 'success');
        }
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error al comunicarse con el servidor.', 'error');
      }
    }
  };

  const handleEdit = async (id) => {
    const { value: newName, isConfirmed } = await Swal.fire({
      title: 'Ingresa un nuevo nombre',
      input: 'text',
      inputLabel: 'Nuevo nombre',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'No puede ser en blanco!'
        }
      }
    })
    if (isConfirmed) {
      try {
        const response = await putFetch(`user/${id}`, { name: newName })
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
          return;
        } else {
          setRefresh(true);
          Swal.fire('El nombre se actualizó existosamente!', '', 'success')
        }
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error al comunicarse con el servidor.', 'error');
      }
    }
  };

  const handleDelete = async (id) => {
    const { isDenied } = await Swal.fire({
      title: 'Estás seguro que quieres eliminar?',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Eiminar`,
    })
    if (isDenied) {
      try {
        const response = await deleteFetch(`user/${id}`)
        if (response.error) {
          Swal.fire('Error', 'Ocurrió un error! Inténtalo de nuevo.', 'error');
          return;
        } else {
          setRefresh(true);
          Swal.fire('Eliminado exitosamente!', '', 'success')
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
        userInfo={userInfo}
        isDarkMode={getIsDarkMode}
        handleNew={handleNew}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
