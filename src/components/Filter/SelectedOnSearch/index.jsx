import React from 'react';
import PropTypes from 'prop-types';

function SelectedOnSearch({ category, text }) {
  return (
    <div className="flex bg-white rounded gap-x-2 px-2 py-[1px] text-xs border-[1px] border-gray-400">
      <select name="" id="" className="border-none text-xs py-0 w-fit focus:ring-0">
        <option selected>{text}</option>
        {
                category.map((item) => (
                  <option value={item}>item</option>
                ))
            }
      </select>
      <input type="text" className="outline-none text-xs border-none focus:ring-0 w-full" placeholder="cari" />
    </div>
  );
}

SelectedOnSearch.propTypes = {
  category: PropTypes.arrayOf.isRequired,
  text: PropTypes.string,
};

SelectedOnSearch.defaultProps = {
  text: '',
};

export default SelectedOnSearch;
