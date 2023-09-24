/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderItem from './HeaderItem';
import RowItem from './RowItem';

function TableSection({
  columnsName, rowsName, data, pathDetail, pathEdit, pathNote, getIdFromNotes, isClasses = false, isSuluk = false, isNotes = false, idFlock,
}) {
  return (
    <div className="relative overflow-x-auto mt-5 drop-shadow-sm">
      <table className="w-full text-xs text-left text-gray-500">
        <HeaderItem columns={columnsName} />
        <tbody>
          {
            isClasses || isSuluk || isNotes
              ? data && data.details.map((item) => (
                <RowItem
                  key={item._id}
                  data={item}
                  rows={rowsName}
                  isClasses={isClasses}
                  isSuluk={isSuluk}
                  pathDetail={`${pathDetail}${idFlock}/${item._id}`}
                  pathEdit={`${pathEdit}${idFlock}/${item._id}`}
                />
              ))
              : data && data.map((item) => (
                <RowItem
                  key={item._id}
                  data={item}
                  rows={rowsName}
                  pathDetail={`${pathDetail}${item._id}`}
                  pathEdit={`${pathEdit}${item._id}`}
                  pathNote={pathNote ? (getIdFromNotes(item) ? `${pathNote}${getIdFromNotes(item)}` : `${pathNote}${item._id}`) : undefined}
                  regency={item.address.regency !== '' ? item.address.regency : ' '}
                />
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

TableSection.propTypes = {
  columnsName: PropTypes.arrayOf(PropTypes.string),
  rowsName: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  pathDetail: PropTypes.string,
  pathEdit: PropTypes.string,
  pathNote: PropTypes.string,
  getIdFromNotes: PropTypes.func,
  isClasses: PropTypes.bool,
  isSuluk: PropTypes.bool,
  isNotes: PropTypes.bool,
  idFlock: PropTypes.string,
};

TableSection.defaultProps = {
  isClasses: false,
  isSuluk: false,
  isNotes: false,
};

export default TableSection;
