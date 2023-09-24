/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ flocks, notesFlock }) {
  const columnsName = ['NAMA', 'ASAL MZ', 'KAJI', 'KABUPATEN', 'ACTION'];
  const rowsName = ['name', 'mzOrigin', 'kaji'];
  const pathDetail = '/jamaah/detailData/';
  const pathEdit = '/jamaah/editData/';
  const pathNote = '/jamaah/catatan/listData/';

  const getIdFromNotes = (flock) => {
    const detailNote = flock && notesFlock && notesFlock.find((note) => flock.nik === note.nik && flock.fathersName === note.fathersName);
    return detailNote ? detailNote._id : null;
  };

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={flocks}
        pathDetail={pathDetail}
        pathEdit={pathEdit}
        pathNote={pathNote}
        getIdFromNotes={getIdFromNotes}
      />
    </div>
  );
}

TableList.propTypes = {
  flocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  notesFlock: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableList;
