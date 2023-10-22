/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ flocks }) {
  const columnsName = ['NAMA', 'ASAL MZ', 'KAJI', 'KABUPATEN', 'ACTION'];
  const rowsName = ['name', 'mzOrigin', 'afterKaji'];
  const pathDetail = '/jamaah/detailData/';
  const pathEdit = '/jamaah/editData/';
  const pathNote = '/jamaah/catatan/listData/';

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={flocks}
        pathDetail={pathDetail}
        pathEdit={pathEdit}
        pathNote={pathNote}
      />
    </div>
  );
}

TableList.propTypes = {
  flocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableList;
