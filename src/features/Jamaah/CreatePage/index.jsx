/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ConfirmAddData from 'components/Form/Confirmation';
import {
  getFlocks, getFunctionals, addFlock, addFunctional, updateFlock, importFileFlocks,
} from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Loading from 'components/Loading';
import Header from './layout/Header';
import InputDataSection from './layout/InputDataSection';

import 'react-toastify/dist/ReactToastify.css';

function CreateData() {
  // confirm data process
  const [selectedOptionFunctional, setSelectedOptionFunctional] = useState('');
  const [functionals, setfunctional] = useState({ error: false, data: [] });
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
  const [flocks, setFlocks] = useState({ error: false, data: [] });
  const [anotherBio, setAnotherBio] = useState({});

  // data location
  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  // notification
  const notifyIsAvailableData = (dataIsAvailable) => {
    let message = '';
    dataIsAvailable
      ? (message = 'Data tersedia sebagai fungsional')
      : (message = 'Data tidak tersedia sebagai fungsional');

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

  const notifySuccessAddData = () => {
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

  const notifyErrordAddData = () => {
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
  const handleOptionChange = (newValue) => {
    setSelectedOptionFunctional(newValue);
    setHasSubmitted(false);
  };

  const handleFormSubmit = (dataInputOnForm) => {
    setFormData({ ...dataInputOnForm });
    setHasSubmitted(true);
  };

  // add data process
  const handleAddFlock = async (flockData) => {
    try {
      const response = await addFlock(flockData);
      notifySuccessAddData();
      console.log('Data berhasil ditambahkan', response);
      setStatus(true);
    } catch (error) {
      notifyErrordAddData();
      console.log('Gagal menambahkan data', error.message);
    }
  };

  const handleAddFunctional = async (functionalData) => {
    try {
      const response = await addFunctional(functionalData);
      console.log('Data fungsional berhasil ditambahkan', response);
      setStatus(true);
    } catch (error) {
      console.log('Gagal menambahkan data fungsional', error.message);
    }
  };

  const handleAddAnotherBio = async (anotherData) => {
    try {
      const response = await updateFlock(anotherData);
      notifySuccessAddData();
      console.log('Data biodata lainnya berhasil ditambahkan', response);
      setStatus(true);
    } catch (error) {
      console.log('Gagal menambahkan data biodata lainnya', error.message);
    }
  };

  const handleImportDataFlock = async (file) => {
    try {
      const response = await importFileFlocks(file);
      notifySuccessAddData();
      console.log('Data berhasil ditambahkan', response);
      setStatus(true);
    } catch (error) {
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
    setSelectedOptionFunctional('');
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFunctionals();
        setfunctional(result);
        setIsLoading(false);
      } catch (error) {
        setfunctional({ error: true, data: [] });
        setIsLoading(false);
      }
    };
    fetchData();
  }, [hasSubmitted]);

  // const { data } = functionals;
  // const dataFunctional = data && data.functionals;

  useEffect(() => {
    if (hasSubmitted) {
      const isDataAvailable = functionals.data && functionals.data.functionals && functionals.data.functionals.some(
        (item) => item.nik === formData.nik && item.fathersName.toLowerCase() === formData.fathersName.toLowerCase(),
      );
      setIsAvailable(isDataAvailable);
      notifyIsAvailableData(isDataAvailable);
    }
  }, [hasSubmitted]);

  // add data process
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        setFlocks(result);
        // const flockByNik = result.data.find((flock) => flock.nik === formData.nik && flock.fathersName === formData.fathersName)
        // setAnotherBio(flockByNik)
      } catch (error) {
        console.log(error.message);
      }
    };
    if (hasSubmitted) {
      fetchData();
    }
  }, [hasSubmitted]);
  const dataFlocks = flocks.data.flocks || [];

  useEffect(() => {
    if (dataFlocks.length !== 0 && formData) {
      const flockByNik = dataFlocks && dataFlocks.find((flock) => flock.nik === formData.nik && flock.fathersName.toLowerCase() === formData.fathersName.toLowerCase());
      if (flockByNik) {
        setAnotherBio(flockByNik);
      }
    }
  }, [formData, dataFlocks]);

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate('/jamaah/listData');
      }, 2000);
    }
  }, [status]);

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
          <Header importFileFlocks={handleImportDataFlock} />
        </div>
        <div>
          <ConfirmAddData
            onSubmit={handleFormSubmit}
            selectedOptionFunctional={selectedOptionFunctional}
            onOptionChangeFunctional={handleOptionChange}
          />
        </div>
        <div>
          {
            isLoading ? <Loading />
              : (
                <InputDataSection
                  isFunctional={selectedOptionFunctional}
                  isAvailable={isAvailable}
                  addFlock={handleAddFlock}
                  addFunctional={handleAddFunctional}
                  putFlock={handleAddAnotherBio}
                  updatePersonalData={updatePersonalData}
                  personalData={personalData}
                  anotherBio={anotherBio && anotherBio}
                  province={province && province}
                  selectedProvince={handleSelectedProvince}
                  regency={regency && regency}
                  selectedRegency={handleSelectedRegency}
                  subdistrict={subdistrict && subdistrict}
                  selectedSubdistrict={handleSelectedSubdistrict}
                  ward={ward && ward}
                  formData={formData && formData}
                />
              )
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

export default CreateData;
