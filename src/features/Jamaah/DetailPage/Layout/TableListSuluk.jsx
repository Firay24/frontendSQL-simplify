/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableListSuluk({ suluks }) {
  const columnsName = ['Suluk Ke', 'Nama Suluk', 'Pelaksanaan', 'Lokasi', 'Kaji Sebelum', 'Kaji setelah', 'Action'];
  const rowsName = ['sulukTo', 'nameSuluk', 'times', 'location', 'prevKaji', 'afterKaji'];
  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={suluks && suluks}
        isSuluk
      />
    </div>
  );
}

TableListSuluk.propTypes = {
  suluks: PropTypes.object,
};

export default TableListSuluk;
