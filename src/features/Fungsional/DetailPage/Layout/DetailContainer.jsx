/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BiodataSection from 'components/Container/Biodata';
import AddressSection from 'components/Container/Address';
import FunctionalSection from 'components/Container/Functional';
import EditButton from 'components/Button/ButtonOnLink';

function DetailContainer({ id, flock, functional }) {
  const functionalHeadLevel = [
    {
      name: 'petoto',
      value: 'Petoto',
    },
    {
      name: 'pentawajuh',
      value: 'Pentawajuh',
    },
    {
      name: 'pentarekat',
      value: 'Pentarekat',
    },
    {
      name: 'pz',
      value: 'PZ',
    },
  ];
  return (
    <div>
      <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
        <div className="mb-3">
          <h2 className="text-base text-basic-blue font-medium">Identitas pribadi</h2>
          <div className="grid grid-cols-2 mt-5">
            <BiodataSection flock={flock && flock} isFunctional />
            <AddressSection data={flock && flock.length !== 0 ? flock : []} />
          </div>
        </div>
      </div>
      <div className="bg-white mt-5 p-6 drop-shadow-sm rounded">
        <h2 className="text-base text-basic-blue font-medium">Data Fungsional</h2>
        <div className="grid grid-cols-2 grid-flow-row">
          {
              functionalHeadLevel.map((head, index) => (
                <FunctionalSection key={index} functional={functional && functional[head.name]} functionalLevel={head.value} />
              ))
            }
        </div>
      </div>
      <div className="flex justify-end mt-8 mb-5">
        <EditButton text="Edit" styleButton="w-1/6" path={`/fungsional/editData/${id}/${functional._id}`} />
      </div>
    </div>
  );
}

DetailContainer.propTypes = {
  id: PropTypes.string.isRequired,
  flock: PropTypes.object.isRequired,
  functional: PropTypes.object.isRequired,
};

export default DetailContainer;
