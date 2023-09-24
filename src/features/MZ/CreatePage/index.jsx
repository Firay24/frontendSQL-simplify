/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { addBoard, importFileBoards } from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Header from './Layout/Header';
import InputDataSection from './Layout/InputDataSection';
import 'react-toastify/dist/ReactToastify.css';

function CreatePage() {
  // data location
  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  // notification
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

  // add data process
  const handleAddBoard = async (boardData) => {
    try {
      const response = await addBoard(boardData);
      console.log('Data berhasil ditambahkan', response);
      setStatus(true);
      notifySuccess();
    } catch (error) {
      console.log('Gagal menambahkan data', error.message);
      notifyError();
    }
  };

  const handleImportDataBoard = async (file) => {
    try {
      const response = await importFileBoards(file);
      console.log('Data berhasil ditambahkan', response);
      setStatus(true);
      notifySuccess();
    } catch (error) {
      console.log('Gagal menambahkan data', error.message);
    }
  };

  // data location process
  const handleSelectedProvince = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedProvince = province.data.find((itemProvince) => itemProvince.name === value);
      if (idSelectedProvince) {
        setSelectedProvince(idSelectedProvince.id);
      }
    }
  };

  const handleSelectedRegency = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedRegency = regency.data.find((itemRegency) => itemRegency.name === value);
      if (idSelectedRegency) {
        setSelectedRegency(idSelectedRegency.id);
      }
    }
  };

  const handleSelectedSubdistrict = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedSubdistrict = subdistrict.data.find((itemSubdistrict) => itemSubdistrict.name === value);
      if (idSelectedSubdistrict) {
        setSelectedSubdistrict(idSelectedSubdistrict.id);
      }
    }
  };

  // get data location
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProvince();
        setProvince(result);
      } catch (error) {
        setProvince({ data: [] });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedProvince) {
          const result = await getRegency(selectedProvince);
          setRegency(result);
        }
      } catch (error) {
        setRegency({ data: [] });
      }
    };
    fetchData();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedRegency) {
          const result = await getSubdistrict(selectedRegency);
          setSubdistrict(result);
        }
      } catch (error) {
        setSubdistrict({ data: [] });
      }
    };
    fetchData();
  }, [selectedRegency]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedSubdistrict) {
          const result = await getWard(selectedSubdistrict);
          setWard(result);
        }
      } catch (error) {
        setWard({ data: [] });
      }
    };
    fetchData();
  }, [selectedSubdistrict]);

  // successfully process
  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate('/mz/listData');
      }, 2000);
    }
  }, [status]);

  return (
    <>
      <div className="mt-4 mr-10">
        <div>
          <Header importFileBoard={handleImportDataBoard} />
        </div>
        <div>
          <InputDataSection
            addBoard={handleAddBoard}
            province={province && province}
            selectedProvince={handleSelectedProvince}
            regency={regency}
            selectedRegency={handleSelectedRegency}
            subdistrict={subdistrict && subdistrict}
            selectedSubdistrict={handleSelectedSubdistrict}
            ward={ward}
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

export default CreatePage;
