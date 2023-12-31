/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableListSuluk({ suluks, idFlock }) {
  const columnsName = ['Nama Suluk', 'Suluk Ke', 'Pelaksanaan', 'Lokasi', 'Kaji Sebelum', 'Kaji setelah', 'Action'];
  const rowsName = ['nameSuluk', 'sulukTo', 'times', 'location', 'prevKaji', 'afterKaji'];
  const pathAddSuluk = '/jamaah/suluk/create/';
  const pathEditExtra = '/jamaah/suluk/edit/';
  const pathDetailExtra = '/jamaah/suluk/view/';
  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={suluks && suluks}
        isSuluk
        idFlock={idFlock}
        path={pathAddSuluk}
        pathEditExtra={pathEditExtra}
        pathDetailExtra={pathDetailExtra}
        extra
      />
    </div>
  );
}

TableListSuluk.propTypes = {
  suluks: PropTypes.object,
  idFlock: PropTypes.number,
};

export default TableListSuluk;
