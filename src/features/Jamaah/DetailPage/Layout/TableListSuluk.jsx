/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableListSuluk({ suluks }) {
  const columnsName = ['Suluk Ke', 'Pelaksanaan', 'Lokasi', 'Kaji'];
  const rowsName = ['sulukTo', 'time', 'location', 'kaji'];
  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={suluks}
        isSuluk
      />
    </div>
  );
}

TableListSuluk.propTypes = {
  suluks: PropTypes.object,
};

export default TableListSuluk;
