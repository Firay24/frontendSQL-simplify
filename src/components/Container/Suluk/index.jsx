/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from 'components/Button/ButtonOnLink';

function DetailContainer({
  idsuluks, idflock, nameSuluk, sulukTo, location, times, prevKaji, afterKaji, notes,
}) {
  return (
    <div className="mt-5">
      <div className="bg-white p-6 drop-shadow-sm rounded">
        <p className="text-sm font-medium text-basic-blue mb-2">Suluk</p>
        <div className="grid grid-cols-2 text-xs text-grey-light mt-3 mb-5">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <p>Nama Suluk</p>
              <p className="text-basic-grey text-sm font-medium">{nameSuluk}</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>Suluk ke-</p>
              <p className="text-basic-grey text-sm font-medium">{sulukTo}</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>Lokasi pelaksanaan</p>
              <p className="text-basic-grey text-sm font-medium">{location}</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>Waktu pelaksanaan</p>
              <p className="text-basic-grey text-sm font-medium">{times}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <p>Kaji sebelum</p>
              <p className="text-basic-grey text-sm font-medium">{prevKaji}</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>Kaji sesudah</p>
              <p className="text-basic-grey text-sm font-medium">{afterKaji}</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>Catatan</p>
              <p className="text-basic-grey text-sm font-medium">{notes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 mb-5">
        <EditButton text="Edit" styleButton="w-1/6" path={`/jamaah/suluk/edit/${idflock}/${idsuluks}`} />
      </div>
    </div>
  );
}

export default DetailContainer;
