/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ConfirmAddData from 'components/Form/Confirmation';
import {
  getFlocks, addFlock, addFunctional, importFileFunctionals,
} from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Loading from 'components/Loading';
import Header from './Layout/Header';
import InputDataSection from './Layout/InputDataSection';
import 'react-toastify/dist/ReactToastify.css';

function CreatePage() {
  // confirm data process
  const [flocks, setFlocks] = useState({ error: false, data: [] });
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [isAvailable, setIsAvailable] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nik: '',
    fathersName: '',
  });

  // add data process
  const [personalData, setPersonalData] = useState({
    name: '',
    nik: '',
    fathersName: '',
  });

  // data location
  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  // notification
  const notifyIsAvailable = (dataIsAvailable) => {
    let message = '';
    dataIsAvailable
      ? (message = 'Data tersedia sebagai jamaah')
      : (message = 'Data tidak tersedia sebagai jamaah');

    toast.info(message, {
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

  // confirm data process
  const handleFormSubmit = (dataInputOnForm) => {
    setFormData({ ...dataInputOnForm });
    setHasSubmitted(true);
  };

  // add data process
  const handleAddFlock = async (flockData) => {
    try {
      const response = await addFlock(flockData);
      notifySuccess();
      console.log('Data berhasil ditambahkan', response);
      setStatus(true);
    } catch (error) {
      notifyError();
      console.log('Gagal menambahkan data', error.message);
    }
  };

  const handleAddFunctional = async (functionalData) => {
    try {
      const response = await addFunctional(functionalData);
      notifySuccess();
      setStatus(true);
      console.log('Data fungsional berhasil ditambahkan', response);
    } catch (error) {
      notifyError();
      console.log('Gagal menambahkan data fungsional', error.message);
    }
  };

  const handleImportDataFunctional = async (file) => {
    try {
      const response = await importFileFunctionals(file);
      notifySuccess();
      setStatus(true);
      console.log('Data berhasil ditambahkan', response);
    } catch (error) {
      notifyError();
      console.log('Gagal menambahkan data', error.message);
    }
  };

  const updatePersonalData = (name, nik, fathersName) => {
    setPersonalData({
      name,
      nik,
      fathersName,
    });
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate('/fungsional/listData');
      }, 2000);
    }
  }, [status]);

  //  data location
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

  // confirm data process
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        setFlocks(result);
        setIsLoading(false);
      } catch (error) {
        setFlocks({ error: true, data: [] });
        setIsLoading(false);
      }
    };
    fetchData();
  }, [hasSubmitted]);

  useEffect(() => {
    if (hasSubmitted) {
      // const isDataAvailable = flocks.data && flocks.data.flocks.some(
      //   (item) => item.nik === formData.nik && item.fathersName.toLowerCase() === formData.fathersName.toLowerCase(),
      // );
      const flockByNik = flocks && flocks.data && flocks.data.flocks.find((itemFlock) => itemFlock.nik === formData.nik && itemFlock.fathersName.toLowerCase() === formData.fathersName.toLowerCase());
      if (flockByNik) {
        setIsAvailable(flockByNik);
        notifyIsAvailable(flock);
        setFlock(flockByNik);
      }
    }
  }, [hasSubmitted]);

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

  if (isLoading) {
    return <div>Waiting...</div>;
  }

  return (
    <>
      <div className="mt-4 mr-10">
        <div>
          <Header importFileFunctionals={handleImportDataFunctional} />
        </div>
        <div>
          <ConfirmAddData
            isFunctional
            onSubmit={handleFormSubmit}
          />
        </div>
        <div>
          {
            isLoading ? <Loading />
              : hasSubmitted ? (
                <InputDataSection
                  flock={flock}
                  isAvailable={isAvailable}
                  addFlock={handleAddFlock}
                  addFunctional={handleAddFunctional}
                  updatePersonalData={updatePersonalData}
                  personalData={personalData}
                  province={province && province}
                  selectedProvince={handleSelectedProvince}
                  regency={regency && regency}
                  selectedRegency={handleSelectedRegency}
                  subdistrict={subdistrict && subdistrict}
                  selectedSubdistrict={handleSelectedSubdistrict}
                  ward={ward && ward}
                  formData={formData && formData}
                />
              ) : null
          }
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
