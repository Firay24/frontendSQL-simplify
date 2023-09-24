/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  getNoteBoard, getBoard, updateNoteBoard, addNoteBoard,
} from 'utils/apiData';
import InputContainer from 'components/Form/Note/MZ';
import Header from './Layout/Header';
import 'react-toastify/dist/ReactToastify.css';

function CreateNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({ error: false, data: [] });
  const [board, setBoard] = useState({ eror: false, data: [] });
  const [status, setStatus] = useState(false);
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

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getNoteBoard(idParams);
        setNote(result);
      } catch (error) {
        setNote({ error: true, data: [] });
      }
    };
    fetchData(id);
  }, [id]);
  const detailNote = note && note.data && note.data.note;

  useEffect(() => {
    if (!detailNote) {
      const fetchData = async (idParams) => {
        try {
          const result = await getBoard(idParams);
          setBoard(result);
        } catch (error) {
          setBoard({ error: true, data: null });
        }
      };
      fetchData(id);
    }
  }, [detailNote, id]);
  const detailBoard = board && board.data && board.data.board;

  const handleUpdateNote = async (value) => {
    try {
      const response = await updateNoteBoard(value);
      setStatus(true);
      notifySuccess();
      console.log('Data berhasil diperbarui', response);
    } catch (error) {
      notifyError();
      console.log('Data gagal diperbarui');
    }
  };

  const handleAddNote = async (value) => {
    try {
      const response = await addNoteBoard(value);
      setStatus(true);
      setNote(response);
      notifySuccess();
      console.log('Data berhasil ditambahkan', response);
    } catch (error) {
      notifyError();
      console.log('Data gagal ditambahkan');
    }
  };
  const detailNoteAfterAdd = note && note.data && note.data.note;

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(`/mz/catatan/listData/${detailNoteAfterAdd._id}`);
      }, 2000);
    }
  }, [status]);

  return (
    <>
      <div className="mt-4 mr-10 mb-6">
        <div>
          <Header id={id} />
        </div>
        <div>
          <InputContainer
            addNote={detailNote ? handleUpdateNote : handleAddNote}
            prevNotes={detailNote ? detailNote && detailNote : detailBoard}
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

export default CreateNotePage;
