/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  getFlock, updateFlock, getIsFunctional,
} from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Header from './Layout/Header';
import EditDataSection from './Layout/EditDataSection';
import 'react-toastify/dist/ReactToastify.css';

function EditPage() {
  // state date user
  const [flock, setFlock] = useState({ error: false, data: null });
  const [status, setStatus] = useState(false);
  const [isFunctional, setIsFunctional] = useState(false);

  //  state address
  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  // params's variable
  const navigate = useNavigate();
  const { id } = useParams();

  // notification functions
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

  const notifyErrord = () => {
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

  // handle address onSelected
  const handleSelectedProvince = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedProvince = province && province.data.find((itemProvince) => itemProvince.name === value);
      setSelectedProvince(idSelectedProvince && idSelectedProvince.id);
    }
  };

  const handleSelectedRegency = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedRegency = regency.data.find((itemRegency) => itemRegency.name === value);
      setSelectedRegency(idSelectedRegency && idSelectedRegency.id);
    }
  };

  const handleSelectedSubdistrict = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedSubdistrict = subdistrict.data.find((itemSubdistrict) => itemSubdistrict.name === value);
      setSelectedSubdistrict(idSelectedSubdistrict && idSelectedSubdistrict.id);
    }
  };

  const handleUpdateFlock = async (value) => {
    try {
      const response = await updateFlock(value);
      notifySuccess();
      console.log('Data berhasil diperbarui', response);
      setStatus(true);
    } catch (error) {
      notifyErrord();
      console.log('Gagal memperbarui data lainnya', error.message);
    }
  };

  // handle effect navigate when succes login
  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(`/jamaah/detailData/${id}`);
      }, 2000);
    }
  }, [status]);

  // handle effect to get flock data after state id
  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getFlock(idParams);
        if (result !== undefined && result != null) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };

    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data;

  // handle effect to get isFunctional
  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getIsFunctional(idParams);
        if (result && result.data) {
          if (result.data.length > 0) {
            setIsFunctional(true);
          }
        }
      } catch (error) {
        setIsFunctional(false);
      }
    };

    fetchData(id);
  }, [id]);

  // handle effect to get address
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
        const result = await getRegency(selectedProvince);
        setRegency(result);
      } catch (error) {
        setRegency({ data: [] });
      }
    };
    fetchData();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSubdistrict(selectedRegency);
        setSubdistrict(result);
      } catch (error) {
        setSubdistrict({ data: [] });
      }
    };
    fetchData();
  }, [selectedRegency]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWard(selectedSubdistrict);
        setWard(result);
      } catch (error) {
        setWard({ data: [] });
      }
    };
    fetchData();
  }, [selectedSubdistrict]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header />
      </div>
      <div>
        <EditDataSection
          flock={detailFlock && detailFlock}
          updateFlock={handleUpdateFlock}
          isFunctional={isFunctional}
          province={province && province}
          selectedProvince={handleSelectedProvince}
          regency={regency && regency}
          selectedRegency={handleSelectedRegency}
          subdistrict={subdistrict && subdistrict}
          selectedSubdistrict={handleSelectedSubdistrict}
          ward={ward}
        />
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
    </div>
  );
}

export default EditPage;
