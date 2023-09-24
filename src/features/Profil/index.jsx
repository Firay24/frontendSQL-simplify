/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProfilSection from 'components/Container/Profil';
import Header from './Layout/Header';

function ProfilPage({ user, onLogout }) {
  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header {...user} onLogout={onLogout} />
      </div>
      <div>
        <ProfilSection user={user} />
      </div>
    </div>
  );
}

ProfilPage.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ProfilPage;
