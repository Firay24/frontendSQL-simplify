import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'components/Form/Suluk';
import { kajiData, sulukData } from 'utils/suluk';
import { getFlock, createSuluk } from 'utils/apiData';
import Header from './layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function CreateSulukPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [infoSuluk, setInfoSuluk] = useState({ error: false, data: [] });
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

  const handleCreateSuluk = async (value) => {
    try {
      const response = await createSuluk({ ...value, id });
      setInfoSuluk(response);
      notifySuccess();
      setStatus(true);
      console.log('Data suluk berhasil ditambahkan', infoSuluk);
    } catch (error) {
      notifyError();
      console.log('Data suluk gagal ditambahkan', infoSuluk);
    }
  };

  useEffect(() => {
    const fetchData = async (idFlock) => {
      try {
        const result = await getFlock(idFlock);
        if (result) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };
    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data;

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    }
    setStatus(false);
  }, [status]);

  return (
    <>
      <div className="mt-4 mr-10">
        <div>
          <Header />
        </div>
        <div>
          <Container
            kaji={kajiData}
            suluk={sulukData}
            addSuluk={handleCreateSuluk}
            flock={detailFlock && detailFlock}
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

export default CreateSulukPage;
