/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EditButton from 'components/Button/ButtonOnLink';
import NoteContainer from 'components/Container/Note';

function DetailContainer({ infoNote, id, idNote }) {
  return (
    <div className="mt-5">
      <NoteContainer {...infoNote} />
      <div className="flex justify-end mt-8 mb-5">
        <EditButton text="Edit" styleButton="w-1/6" path={`/jamaah/catatan/editData/${id}/${idNote}`} />
      </div>
    </div>
  );
}

DetailContainer.propTypes = {
  infoNote: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  idNote: PropTypes.string.isRequired,
};

export default DetailContainer;
