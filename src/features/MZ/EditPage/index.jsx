/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  getBoard, getNotesBoard, updateBoard, updateNoteBoardBio,
} from 'utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from 'utils/apiLocation';
import Header from './Layout/Header';
import EditDataSection from './Layout/EditDataSection';
import 'react-toastify/dist/ReactToastify.css';

function EditPage() {
  // edit data state
  const [board, setBoard] = useState({ error: false, data: null });
  const [notes, setNotes] = useState({ error: false, data: [] });
  const [note, setNote] = useState({ error: false, data: null });
  const [status, setStatus] = useState({
    updateBoard: false,
    updateNoteBoardBio: false,
  });

  // location state
  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  const navigate = useNavigate();
  const { id } = useParams();

  // notification
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

  const handleUpdateBoard = async (value) => {
    try {
      const response = await updateBoard(value);
      notifySuccess();
      console.log('Data biodata berhasil diperbarui', response);
      setStatus({
        updateBoard: true,
      });
    } catch (error) {
      notifyError();
      console.log('Gagal memperbarui data', error.message);
    }
  };

  const handleUpdateNote = async (value) => {
    try {
      const response = await updateNoteBoardBio(value);
      console.log('Data catatan berhasil diperbarui', response);
      setStatus({
        updateNoteBoardBio: true,
      });
    } catch (error) {
      console.log('Data catatan gagal diperbarui', error.message);
    }
  };

  useEffect(() => {
    if (status.updateBoard || status.updateNoteBoardBio) {
      setTimeout(() => {
        navigate(`/mz/detailData/${id}`);
      }, 2000);
    }
  }, [status]);

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getBoard(idParams);
        setBoard(result);
      } catch (error) {
        setBoard({ error: true, data: null });
      }
    };
    fetchData(id);
  }, [id]);
  const detailBoard = board && board.data && board.data.board;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesBoard();
        setNotes(result);
      } catch (error) {
        setNotes({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataNote = notes && notes.data && notes.data.notes;

  useEffect(() => {
    const detailNote = detailBoard && dataNote && dataNote.find((item) => item.nik === detailBoard.nik && item.fathersName.toLowerCase() === detailBoard.fathersName.toLowerCase());
    if (detailNote) {
      setNote(detailNote);
    }
  }, [dataNote, detailBoard]);

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
          board={detailBoard && detailBoard}
          notes={note && note}
          updateBoard={handleUpdateBoard}
          updateNoteBoard={handleUpdateNote}
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
