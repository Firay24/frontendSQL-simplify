/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ boards, notesBoard }) {
  const columnsName = ['NAMA', 'STATUS MZ', 'KATEGORI SK 117', 'KABUPATEN', 'ACTION'];
  const rowsName = ['name', 'statusBoard', 'SKCategory'];
  const pathDetail = '/mz/detailData/';
  const pathEdit = '/mz/editData/';
  const pathNote = '/mz/catatan/listData/';

  const getIdFromNotes = (board) => {
    const detailNote = board && notesBoard && notesBoard.find((note) => board.name === note.name && board.regionBKMZ === note.regionBKMZ);
    return detailNote ? detailNote._id : null;
  };

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={boards}
        pathDetail={pathDetail}
        pathEdit={pathEdit}
        pathNote={pathNote}
        getIdFromNotes={getIdFromNotes}
      />
    </div>
  );
}

TableList.propTypes = {
  boards: PropTypes.array.isRequired,
  notesBoard: PropTypes.object.isRequired,
};

export default TableList;
