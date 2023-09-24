/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../../components/Header/HeaderLogo';
import RegisInputContainer from '../../../components/Form/Register';
import { register } from '../../../utils/apiData';
import 'react-toastify/dist/ReactToastify.css';

function RegisPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const notifySuccess = () => {
    const message = 'Register akun berhasil';

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

  const notifyError = () => {
    const message = 'Register akun gagal';

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

  async function onRegisterHandler(user) {
    setIsLoading(true);
    try {
      const { error } = await register(user);
      if (!error) {
        notifySuccess();
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        notifyError();
      }
    } catch (error) {
      console.log('Error while register in', error);
      notifyError();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="bg-gray-soft min-h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center my-auto">
          <div>
            <Header title="Sign up to" />
          </div>
          <div className="w-1/4">
            <RegisInputContainer register={onRegisterHandler} isLoading={isLoading} />
          </div>
        </div>
        <div className="flex justify-center mb-7">
          <p className="text-xs text-grey-light">Copyright © 2023 Simplify</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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

export default RegisPage;
