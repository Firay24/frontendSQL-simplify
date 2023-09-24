/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function AddressSection({ data, isBoard }) {
  return (
    <div>
      {
          isBoard
            ? (
              <div className="grid grid-cols-2 text-xs text-grey-light">
                <div>
                  <h3 className="text-sm text-grey-light font-normal">Alamat</h3>
                  <div className="flex flex-col gap-y-1 mt-3">
                    <p>Negara</p>
                    <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.country)}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 mt-3">
                    <p>{data && data.address && data.address.country === 'malaysia' ? 'Negara bagian' : 'Provinsi'}</p>
                    <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.province)}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 mt-3">
                    <p>{data && data.address && data.address.country === 'malaysia' ? 'Daerah' : 'Kabupaten/kota'}</p>
                    <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.regency)}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 mt-3">
                    <p>Link Gmaps</p>
                    <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : data.address.linkGmaps}</p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <div className="h-full w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div>
                    <h3 className="text-sm text-grey-light font-normal">Alamat</h3>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Mukim' : 'Kecamatan'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.subdistrict)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Kampung' : 'Kelurahan/Desa'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.ward)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>Alamat detail</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : data.address.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="flex gap-x-6">
                <div className="w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                <div>
                  <h3 className="text-sm text-grey-light font-normal">Alamat tinggal</h3>
                  <div className="text-xs text-grey-light mt-3 mb-5">
                    <div className="flex flex-col gap-y-1">
                      <p>Negara</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.country)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Negara bagian' : 'Provinsi'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.province)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Daerah' : 'Kabupaten/kota'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.regency)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Mukim' : 'Kecamatan'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.subdistrict)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>{data && data.address && data.address.country === 'malaysia' ? 'Kampung' : 'Kelurahan/Desa'}</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : convertToTitleCase(data.address.ward)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>Alamat detail</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : data.address.details}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                      <p>Link google maps</p>
                      <p className="text-basic-grey text-sm font-medium">{data.length === 0 ? '' : data.address.linkGmaps}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
    </div>
  );
}

AddressSection.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object, // Tipe objek
    PropTypes.array, // Tipe array
  ]).isRequired,
  isBoard: PropTypes.bool,
};

AddressSection.defaultProps = {
  isBoard: false,
};

export default AddressSection;
