/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ flocks }) {
  const columnsName = ['NAMA', 'ASAL MZ', 'KAJI', 'KABUPATEN', 'ACTION'];
  const rowsName = ['name', 'mzOrigin', 'kaji'];
  const pathDetail = '/fungsional/detailData/';
  const pathEdit = '/fungsional/editData/';

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={flocks}
        pathDetail={pathDetail}
        pathEdit={pathEdit}
      />
    </div>
  );
}

TableList.propTypes = {
  flocks: PropTypes.oneOfType([
    PropTypes.object, // Tipe objek
    PropTypes.array, // Tipe array
  ]).isRequired,
};

export default TableList;
