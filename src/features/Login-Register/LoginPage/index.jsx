/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/order */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../../components/Header/HeaderLogo';
import LoginInputContainer from '../../../components/Form/Login';
import { login } from '../../../utils/apiData';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const notifySuccess = () => {
    const message = 'Login berhasil';

    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const notifyErrord = () => {
    const message = 'Gagal untuk login';

    toast.error(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  async function onLogin(user) {
    setIsLoading(true);
    try {
      const { data } = await login(user);

      if (data.token !== undefined) {
        notifySuccess();
        loginSuccess(data.token);
      } else {
        navigate('/');
        notifyErrord();
      }
    } catch (error) {
      console.log('Error while logging in', error);
      notifyErrord();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="bg-gray-soft min-h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center my-auto">
          <div>
            <Header title="Sign in to" />
          </div>
          <div className="w-1/4">
            <LoginInputContainer login={onLogin} isLoading={isLoading} />
          </div>
        </div>
        <div className="flex justify-center mb-7">
          <p className="text-xs text-grey-light">Copyright © 2023 Simplify</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
