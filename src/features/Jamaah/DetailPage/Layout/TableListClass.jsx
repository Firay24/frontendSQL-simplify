/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableListClass({ classes }) {
  const columnsName = ['Nama kelas', 'Pelaksanaan', 'Lokasi'];
  const rowsName = ['name', 'time', 'location'];
  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={classes}
        isClasses
      />
    </div>
  );
}

TableListClass.propTypes = {
  classes: PropTypes.object,
};

export default TableListClass;
