/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ notes, idBoard }) {
  const columnsName = ['Judul catatan', 'Tanggal', 'Author', 'Terakhir update', 'Status', 'Action'];
  const rowsName = ['name', 'createAt', 'author', 'updatedAt', 'status'];
  const pathDetail = '/mz/catatan/detailData/';
  const pathEdit = '/mz/catatan/editData/';

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={notes}
        idFlock={idBoard}
        isNotes
        pathDetail={pathDetail}
        pathEdit={pathEdit}
      />
    </div>
  );
}

TableList.propTypes = {
  notes: PropTypes.array.isRequired,
  idBoard: PropTypes.string.isRequired,
};

export default TableList;
