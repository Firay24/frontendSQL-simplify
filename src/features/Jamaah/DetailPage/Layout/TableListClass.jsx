/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableListClass({ classes, idFlock }) {
  const columnsName = ['Nama kelas', 'Pelaksanaan', 'Lokasi', 'Action'];
  const rowsName = ['nameClass', 'times', 'location'];
  const pathAddClass = '/jamaah/class/create/';
  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={classes}
        isClasses
        path={pathAddClass}
        idFlock={idFlock}
      />
    </div>
  );
}

TableListClass.propTypes = {
  classes: PropTypes.object,
  idFlock: PropTypes.number,
};

export default TableListClass;
