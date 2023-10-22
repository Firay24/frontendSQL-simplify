import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ContainerClass from 'components/Form/Classes';
import { classData } from 'utils/classes';
import { getClass, updateClass } from 'utils/apiData';
import Header from './layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function EditClassPage() {
  const [infoClass, setInfoClass] = useState({ error: false, data: [] });
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const { idclass, idflock } = useParams();

  const notifySuccess = () => {
    const message = 'Data berhasil diperbarui';

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
    const message = 'Data gagal diperbarui';

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

  const handleEditClass = async (value) => {
    try {
      const response = await updateClass(value);
      notifySuccess();
      setStatus(true);
      console.log('Data berhasil di perbarui', response);
    } catch (error) {
      notifyError();
      console.log('Data gagal diperbarui', error);
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await getClass(id);
        if (result !== undefined && result !== null) {
          setInfoClass(result);
        }
      } catch (error) {
        setInfoClass({ error: true, data: null });
      }
    };
    fetchData(idclass);
  }, [idclass]);
  const dataClass = infoClass && infoClass.data;

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(`/jamaah/detailData/${idflock}`);
      }, 2000);
    }
  }, [status]);

  return (
    <>
      <div className="mt-4 mr-10">
        <div>
          <Header />
        </div>
        <div>
          <ContainerClass
            classData={classData}
            classInformation={dataClass && dataClass}
            updateClass={handleEditClass}
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

export default EditClassPage;
