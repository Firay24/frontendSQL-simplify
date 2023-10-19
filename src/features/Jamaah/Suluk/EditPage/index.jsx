import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'components/Form/Suluk';
import { getSuluk, getFlock, updateSuluk } from 'utils/apiData';
import { kajiData, sulukData } from 'utils/suluk';
import Header from './layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function EditSulukPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [infoSuluk, setInfoSuluk] = useState({ error: false, data: [] });
  const { idsuluk, idflock } = useParams();
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

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

  const handleEditSuluk = async (value) => {
    try {
      const response = await updateSuluk(value);
      setInfoSuluk(response);
      notifySuccess();
      setStatus(true);
      console.log('Data suluk berhasil diperbarui', infoSuluk);
    } catch (error) {
      notifyError();
      console.log('Data suluk gagal ditambahkan', infoSuluk);
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await getFlock(id);
        if (result) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };
    fetchData(idflock);
  }, [idflock]);
  const detailFlock = flock && flock.data;

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await getSuluk(id);
        if (result !== undefined && result !== null) {
          setInfoSuluk(result);
        }
      } catch (error) {
        setInfoSuluk({ error: true, data: null });
      }
    };
    fetchData(idsuluk);
  }, [idsuluk]);
  const dataSuluk = infoSuluk && infoSuluk.data;

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
          <Container
            kaji={kajiData}
            suluk={sulukData}
            flock={detailFlock && detailFlock}
            prevFlock={dataSuluk && dataSuluk}
            updateSuluk={handleEditSuluk}
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

export default EditSulukPage;
