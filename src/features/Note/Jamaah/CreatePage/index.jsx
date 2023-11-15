/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import InputContainer from 'components/Form/Note/Jamaah';
import { addNoteFlock } from 'utils/apiData';
import Header from './Layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function CreateNotePage({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const notifySuccessEditData = () => {
    const message = 'Data berhasil ditambahkan';

    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const notifyErrordEditData = () => {
    const message = 'Data gagal ditambahkan';

    toast.error(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleAddNote = async (value) => {
    try {
      const response = await addNoteFlock({ idflock: id, ...value });
      setStatus(true);
      notifySuccessEditData();
      console.log('Data berhasil ditambahkan', response);
    } catch (error) {
      notifyErrordEditData();
      console.log('Data gagal ditambahkan');
    }
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(`/jamaah/catatan/listData/${id}`);
      }, 2000);
    }
  }, [status]);

  return (
    <>
      <div className="mt-4 mr-10 mb-6">
        <div>
          <Header id={id} />
        </div>
        <div>
          <InputContainer
            addNote={handleAddNote}
            user={user && user[0]}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

CreateNotePage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CreateNotePage;
