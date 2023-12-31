/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';
import ParseDateFunc from '../../utils/parseDateFunc';

function RowItem({
  rows, data, pathDetail, pathEdit, pathNote, regency, isClasses = false, isSuluk = false, pathEditExtra, pathDetailExtra,
}) {
  const [scopeColumn, ...regularColumns] = rows;
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {pathDetailExtra.includes('undefined') ? (
          pathDetail.includes('undefined') ? (
            data[scopeColumn]
          ) : (
            <Link to={pathDetail}>{data[scopeColumn]}</Link>
          )
        ) : (
          <Link to={pathDetailExtra}>{data[scopeColumn]}</Link>
        )}
      </th>
      {
                regularColumns.map((column, index) => (
                  column === 'times' || column === 'created_at' || column === 'updated_at'
                    ? (
                      <td key={index} className="px-6 py-4">
                        {ParseDateFunc(data[column])}
                      </td>
                    ) : column === 'status'
                      ? (
                        <td className="px-6 py-3">
                          <div className={data[column] === 0 ? 'bg-red-100 hover:bg-red-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center w-fit' : 'bg-green-100 w-fit hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'}>
                            <RxDotFilled className={data[column] === 0 ? 'text-base text-red-500' : 'text-base text-green-500'} />
                            <p className="text-gray-900 cursor-default">{data[column] ? 'Sudah' : 'Belum'}</p>
                          </div>
                        </td>
                      )
                      : (
                        <td key={index} className="px-6 py-4">
                          {data[column]}
                        </td>
                      )
                ))
            }
      {
                regency ? (
                  <td className="px-6 py-4">
                    {regency}
                  </td>
                ) : null
            }
      {
                !isClasses && !isSuluk ? (
                  <td className="px-6 py-3 flex gap-x-2">
                    <div className="bg-yellow-100 hover:bg-yellow-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center">
                      <RxDotFilled className="text-base text-yellow-500" />
                      <button className="text-gray-900">
                        <Link to={pathEdit}>Edit</Link>
                      </button>
                    </div>
                    <div className="bg-green-100 hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center">
                      <RxDotFilled className="text-base text-green-500" />
                      <button className="text-gray-900">
                        <Link to={pathNote || pathDetail}>{pathNote ? 'Catatan' : 'Detail'}</Link>
                      </button>
                    </div>
                  </td>
                ) : (
                  <td className="px-6 py-3 flex gap-x-2">
                    <div className="bg-yellow-100 hover:bg-yellow-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center">
                      <RxDotFilled className="text-base text-yellow-500" />
                      <button className="text-gray-900">
                        <Link to={pathEditExtra}>Edit</Link>
                      </button>
                    </div>
                  </td>
                )
            }
    </tr>
  );
}

RowItem.propTypes = {
  rows: PropTypes.array,
  data: PropTypes.object,
  pathDetail: PropTypes.string,
  pathEdit: PropTypes.string,
  pathEditExtra: PropTypes.string,
  pathDetailExtra: PropTypes.string,
  pathNote: PropTypes.string,
  regency: PropTypes.string,
  isClasses: PropTypes.bool,
  isSuluk: PropTypes.bool,
};

RowItem.defaultProps = {
  isClasses: false,
  isSuluk: false,
};

export default RowItem;
