import React from 'react';
import PropTypes from 'prop-types';

function HeaderItem({ columns }) {
  return (
    <thead className="bg-[#F2F4F8] text-gray-700 uppercase">
      <tr>
        {
                    columns.map((column, index) => (
                      <th scope="col" key={index} className="px-6 py-3">
                        {column}
                      </th>
                    ))
                }
      </tr>
    </thead>
  );
}

HeaderItem.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeaderItem;
