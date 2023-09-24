/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import InputContainer from 'components/Form/Note/Jamaah';
import Loading from 'components/Loading';
import { getNoteFlock, updateNoteFlock } from 'utils/apiData';
import Header from './Layout/Header';

import 'react-toastify/dist/ReactToastify.css';

function EditNotePage({ user }) {
  const { id } = useParams();
  const { idNote } = useParams();
  const [note, setNote] = useState({ error: false, data: [] });
  const [infoNote, setInfoNote] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const notifySuccessEditData = () => {
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

  const notifyErrordEditData = () => {
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

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getNoteFlock(idParams);
        setNote(result);
        setIsLoading(false);
      } catch (error) {
        setNote({ error: true, data: [] });
      }
    };
    fetchData(id);
  }, [id]);
  const detailNote = note && note.data && note.data.note;

  useEffect(() => {
    const detailInfoNote = detailNote && detailNote.details.find((noteItem) => noteItem._id === idNote);
    if (detailInfoNote) {
      setInfoNote(detailInfoNote);
    }
  }, [idNote, detailNote]);

  const handleUpdateNote = async (value) => {
    try {
      const response = await updateNoteFlock(value);
      notifySuccessEditData();
      console.log('Data berhasil diperbarui', response);
      setStatus(true);
    } catch (error) {
      notifyErrordEditData();
      console.log('Data gagal diperbarui');
    }
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        navigate(`/jamaah/catatan/listData/${id}`);
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
          {
            isLoading ? <Loading />
              : (
                <InputContainer
                  user={user && user}
                  prevNote={infoNote && infoNote}
                  prevNotes={detailNote && detailNote}
                  updateNote={handleUpdateNote}
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

EditNotePage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default EditNotePage;
