/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  getFlock, getFunctionals, getClasses, getSuluks, getNotesFlock, updateFlock, updateFunctional, updateClass, updateSuluk, updateNoteFlockBio,
} from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Header from './Layout/Header';
import EditDataSection from './Layout/EditDataSection';
import 'react-toastify/dist/ReactToastify.css';

function EditPage() {
  const [flock, setFlock] = useState({ error: false, data: null });
  const [classes, setClasses] = useState({ error: false, data: [] });
  const [classItem, setClassItem] = useState({ error: false, data: null });
  const [suluks, setSuluks] = useState({ error: false, data: [] });
  const [suluk, setSuluk] = useState({ error: false, data: null });
  const [notes, setNotes] = useState({ error: false, data: [] });
  const [note, setNote] = useState({ error: false, data: null });
  const [functionals, setFunctionals] = useState({ error: false, data: [] });
  const [functional, setFunctional] = useState({ error: false, data: null });
  const [status, setStatus] = useState({
    updateFlock: false,
    updateClass: false,
    updateSuluk: false,
    updateFunctional: false,
    updateNoteFlockBio: false,
  });

  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  const navigate = useNavigate();
  const { id } = useParams();

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
      console.log('Data biodata berhasil diperbarui', response);
      setStatus({
        updateFlock: true,
      });
    } catch (error) {
      notifyErrord();
      console.log('Gagal memperbarui data lainnya', error.message);
    }
  };

  const handleUpdateFunctional = async (value) => {
    try {
      const response = await updateFunctional(value);
      console.log('Data fungsional berhasil diperbarui', response);
      setStatus({
        updateFunctional: true,
      });
    } catch (error) {
      console.log('Gagal memperbarui data fungsional', error.message);
    }
  };

  const handleUpdateClasses = async (value) => {
    try {
      const response = await updateClass(value);
      console.log('Data kelas berhasil diperbarui', response);
      setStatus({
        updateClass: true,
      });
    } catch (error) {
      console.log('Gagal memperbarui data kelas', error.message);
    }
  };

  const handleUpdateSuluk = async (value) => {
    try {
      const response = await updateSuluk(value);
      console.log('Data suluk berhasil diperbarui', response);
      setStatus({
        updateSuluk: true,
      });
    } catch (error) {
      console.log('Data suluk gagal diperbarui', error.message);
    }
  };

  const handleUpdateNote = async (value) => {
    try {
      const response = await updateNoteFlockBio(value);
      console.log('Data catatan berhasil diperbarui', response);
      setStatus({
        updateNoteFlockBio: true,
      });
    } catch (error) {
      console.log('Data catatan gagal diperbarui', error.message);
    }
  };

  useEffect(() => {
    if (status.updateFlock || status.updateClass || status.updateSuluk || status.updateFunctional) {
      setTimeout(() => {
        navigate(`/jamaah/detailData/${id}`);
      }, 2000);
    }
  }, [status]);

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getFlock(idParams);
        setFlock(result);
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };

    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data && flock.data.flock;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFunctionals();
        setFunctionals(result);
      } catch (error) {
        setFunctionals({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const dataFunctionals = functionals && functionals.data && functionals.data.functionals;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getClasses();
        setClasses(result);
      } catch (error) {
        setClasses({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const dataClasses = classes && classes.data && classes.data.classes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSuluks();
        setSuluks(result);
      } catch (error) {
        setSuluks({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataSuluk = suluks && suluks.data && suluks.data.suluks;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesFlock();
        setNotes(result);
      } catch (error) {
        setNotes({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataNote = notes && notes.data && notes.data.notes;

  useEffect(() => {
    const detailClass = detailFlock && dataClasses && dataClasses.find((item) => item.nik === detailFlock.nik && item.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailClass) {
      setClassItem(detailClass);
    }
  }, [dataClasses, detailFlock]);

  useEffect(() => {
    const detailSuluk = detailFlock && dataSuluk && dataSuluk.find((sulukItem) => sulukItem.nik === detailFlock.nik && sulukItem.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailSuluk) {
      setSuluk(detailSuluk);
    }
  }, [dataSuluk, detailFlock]);

  useEffect(() => {
    const detailFunctional = detailFlock && dataFunctionals && dataFunctionals.find((item) => item.nik === detailFlock.nik && item.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailFunctional) {
      setFunctional(detailFunctional);
    }
  }, [dataFunctionals, detailFlock]);

  useEffect(() => {
    const detailNote = detailFlock && dataNote && dataNote.find((item) => item.nik === detailFlock.nik && item.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailNote) {
      setNote(detailNote);
    }
  }, [dataNote, detailFlock]);

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
          classes={classItem && classItem}
          suluk={suluk && suluk}
          functional={functional && functional}
          notes={note && note}
          updateFlock={handleUpdateFlock}
          updateFunctional={handleUpdateFunctional}
          updateClass={handleUpdateClasses}
          updateSuluk={handleUpdateSuluk}
          updateNote={handleUpdateNote}
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
