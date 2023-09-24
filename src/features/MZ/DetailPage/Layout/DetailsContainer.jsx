/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BiodataSection from 'components/Container/BiodataBoard';
import AddressSection from 'components/Container/Address';
import HeadOfBoard from 'components/Container/HeadOfBoard';
import EditButton from 'components/Button/ButtonOnLink';

function DetailsContainer({ id, board }) {
  const headLevelOnData = [
    {
      name: 'head1',
      value: 'Pengurus 1',
    },
    {
      name: 'head2',
      value: 'Pengurus 2',
    },
    {
      name: 'head3',
      value: 'Pengurus 3',
    },
  ];

  return (
    <div>
      <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
        <h2 className="text-base text-basic-blue font-medium">Data MZ</h2>
        <BiodataSection board={board} />
        <AddressSection isBoard data={board} />
      </div>
      <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
        <h2 className="text-base text-basic-blue font-medium">Data Pengurus MZ</h2>
        <div className="grid grid-rows-1 grid-flow-col">
          {
            headLevelOnData.map((head, index) => (
              <HeadOfBoard key={index} board={board[head.name]} headLevel={head.value} />
            ))
          }
        </div>
      </div>
      <div className="flex justify-end mt-8 mb-5">
        <EditButton text="Edit" styleButton="w-1/6" path={`/mz/editData/${id}`} />
      </div>
    </div>
  );
}

DetailsContainer.propTypes = {
  id: PropTypes.string.isRequired,
  board: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default DetailsContainer;
