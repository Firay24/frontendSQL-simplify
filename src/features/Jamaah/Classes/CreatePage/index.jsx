/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { classData } from 'utils/classes';
import { createClasses } from 'utils/apiData';
import ContainerClass from 'components/Form/Classes';
import Header from './layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function CreateClassPage() {
  const [infoClass, setInfoClass] = useState({ error: false, data: [] });
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const notifySuccess = () => {
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

  const notifyError = () => {
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

  const handleCreateClass = async (value) => {
    try {
      const response = await createClasses({ ...value, id });
      setInfoClass(response);
      notifySuccess();
      setStatus(true);
      console.log('Data class berhasil ditambahkan', infoClass);
    } catch (error) {
      notifyError();
      console.log('Data class gagal ditambahkan', infoClass);
    }
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    }
  });

  return (
    <>
      <div className="mt-4 mr-10">
        <div>
          <Header />
        </div>
        <div>
          <ContainerClass
            classData={classData}
            addClass={handleCreateClass}
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

export default CreateClassPage;
