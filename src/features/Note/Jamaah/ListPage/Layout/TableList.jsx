/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ notes, idFlock }) {
  const columnsName = ['Judul catatan', 'Tanggal', 'Author', 'Terakhir update', 'Status', 'Action'];
  const rowsName = ['name', 'created_at', 'author', 'updated_at', 'status'];
  const pathDetail = '/jamaah/catatan/detailData/';
  const pathEditExtra = '/jamaah/catatan/editData/';

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={notes}
        idFlock={idFlock}
        isClasses
        isSuluk
        pathDetail={pathDetail}
        pathEditExtra={pathEditExtra}
      />
    </div>
  );
}

TableList.propTypes = {
  notes: PropTypes.array.isRequired,
  idFlock: PropTypes.string.isRequired,
};

export default TableList;
