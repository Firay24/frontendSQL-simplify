/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from 'components/Button/ButtonOnClick';

function NoteContainer({
  prevNote, prevNotes, addNote, updateNote, user,
}) {
  const [note, setNote] = useState({
    _id: '',
    name: '',
    regionBKMZ: '',
    details: {
      name: '',
      status: 'Belum selesai',
      details: '',
      author: user.name,
    },
  });

  useEffect(() => {
    if (prevNotes !== undefined && prevNotes !== null && prevNote && user) {
      setNote({
        _id: prevNotes._id,
        name: prevNotes.name,
        regionBKMZ: prevNotes.regionBKMZ,
        details: {
          name: '',
          status: 'Belum selesai',
          details: '',
          author: user.name,
        },
      });
    }
  }, [prevNotes]);

  useEffect(() => {
    if (prevNote !== undefined && prevNotes !== undefined && prevNotes && user) {
      setNote({
        _id: prevNotes._id,
        name: prevNotes.name,
        regionBKMZ: prevNotes.regionBKMZ,
        details: {
          _id: prevNote._id,
          name: prevNote.name,
          status: prevNote.status,
          details: prevNote.details,
          author: user.name,
        },
      });
    }
  }, [prevNote, prevNotes]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNote((prevState) => ({
      ...prevState,
      details: {
        ...prevState.details,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addNote) {
      addNote(note);
    } else if (updateNote) {
      updateNote(note);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-xs bg-white p-6 rounded drop-shadow-sm h-full mt-5 flex flex-col gap-y-5">
          <p className="text-sm font-medium text-basic-blue mb-2">Catatan</p>
          <div className="grid grid-cols-2 gap-x-14">
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="name">Judul</label>
              <input
                name="name"
                id="name"
                type="text"
                value={note.details.name}
                onChange={handleInputChange}
                required
                className="rounded text-xs border-gray-400"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                value={note.details.status}
                onChange={handleInputChange}
                className="rounded text-xs border-gray-400"
              >
                <option value="Belum selesai">Belum selesai</option>
                <option value="Sudah selesai">Sudah selesai</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="details">Detail catatan</label>
            <textarea
              name="details"
              id="details"
              value={note.details.details}
              onChange={handleInputChange}
              cols="30"
              rows="5"
              required
              className="mt-2 resize-none rounded text-xs"
            />
          </div>
        </div>
        <div className="flex my-8 justify-end">
          <SubmitButton text="Submit" bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
        </div>
      </form>
    </div>
  );
}

NoteContainer.propTypes = {
  prevNote: PropTypes.object,
  prevNotes: PropTypes.object,
  addNote: PropTypes.func,
  updateNote: PropTypes.func,
  user: PropTypes.object,
};

export default NoteContainer;
