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
  columnsName, rowsName, data, pathDetail, pathEdit, pathNote, isClasses, isSuluk,
}) {
  return (
    <div className="relative overflow-x-auto mt-5 drop-shadow-sm">
      <table className="w-full text-xs text-left text-gray-500">
        <HeaderItem columns={columnsName} />
        <tbody>
          {
            data && data.map((item) => (
              <RowItem
                key={item.id}
                data={item}
                rows={rowsName}
                isClasses={isClasses}
                isSuluk={isSuluk}
                pathDetail={`${pathDetail}${item.id}`}
                pathEdit={`${pathEdit}${item.id}`}
                pathNote={`${pathNote}${item.id}`}
                regency={item.regency !== '' ? item.regency : ' '}
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
  isClasses: PropTypes.bool,
  isSuluk: PropTypes.bool,
};

TableSection.defaultProps = {
  isClasses: false,
  isSuluk: false,
};

export default TableSection;
