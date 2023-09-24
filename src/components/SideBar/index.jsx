/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import LogoBar from './LogoBar';
import MenuBar from './MenuBar';
import ProfilBar from './ProfilBar';

function SideBarSection({ user }) {
  const pages = [
    {
      path: 'jamaah',
      headline: 'Data jamaah',
    },
    {
      path: 'mz',
      headline: 'Data MZ',
    },
    {
      path: 'fungsional',
      headline: 'Data fungsional',
    },
  ];
  const location = useLocation();

  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <LogoBar />
          <div>
            {
                  pages.map((page, index) => (
                    <div key={index}>
                      <MenuBar data={page.headline} pathRead={`/${page.path}/listData`} pathAdd={`/${page.path}/addData`} />
                      {index < 2 ? (
                        <div key={index} className="border-t-[1px] border-gray-200 mb-3" />
                      ) : null}
                    </div>
                  ))
                }
          </div>
        </div>
        <div className={`${location.pathname === '/profil' ? 'bg-[#E6E9EC] border-l-2 border-gray-600' : ''} flex items-center py-3 hover:bg-[#E6E9EC] hover:border-l-2 hover:border-gray-600`}>
          <ProfilBar user={user} />
        </div>
      </div>
    </div>
  );
}

SideBarSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default SideBarSection;
