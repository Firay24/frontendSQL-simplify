/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { putAccessToken, getUserLogged, getAccessToken } from 'utils/apiData';

import LoginPage from 'features/Login-Register/LoginPage';
import RegisterPage from 'features/Login-Register/RegisterPage';
import Navigation from 'components/Navigation';

import ListPageJamaah from 'features/Jamaah/ListPage';
import CreatePageJamaah from 'features/Jamaah/CreatePage';
import DetailPageJamaah from 'features/Jamaah/DetailPage';
import EditPageJamaah from 'features/Jamaah/EditPage';

import ListPageMZ from 'features/MZ/ListPage';
import CreatePageMZ from 'features/MZ/CreatePage';
import DetailPageMZ from 'features/MZ/DetailPage';
import EditPageMZ from 'features/MZ/EditPage';

import ListPageFungsional from 'features/Fungsional/ListPage';
import CreatePageFungsional from 'features/Fungsional/CreatePage';
import DetailPageFungsional from 'features/Fungsional/DetailPage';
import EditPageFungsional from 'features/Fungsional/EditPage';

import NotesPageJamaah from 'features/Note/Jamaah/ListPage';
import DetailNotePageJamaah from 'features/Note/Jamaah/DetailPage';
import EditNotePageJamaah from 'features/Note/Jamaah/EditPage';
import CreateNotePageJamaah from 'features/Note/Jamaah/CreatePage';

import CreateNotePageMZ from 'features/Note/MZ/CreatePage';
import NotePageMZ from 'features/Note/MZ/ListPage';
import DetailNotePageMZ from 'features/Note/MZ/DetailPage';
import EditNotePageMZ from 'features/Note/MZ/EditPage';

import ProfilPage from 'features/Profil';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const navigate = useNavigate();

  async function onLoginSuccess(accessToken) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    const delayTime = 2000;

    setTimeout(() => {
      setAuthedUser(data.user);
      navigate('/jamaah/listData');
    }, delayTime);
  }

  const getTokenFromLocalStorage = () => {
    const token = getAccessToken();
    return token;
  };

  const onLogoutHandler = async () => {
    if (confirm('Apakah anda yakin ingin keluar?')) {
      setAuthedUser(null);
      putAccessToken('');
    }
  };

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      const fetchUserData = async () => {
        try {
          const { data } = await getUserLogged();
          setAuthedUser(data.user);
        } catch (error) {
          console.log('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }
  }, []);

  if (authedUser === null) {
    return (
      <div>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12">
      <header className="bg-white h-screen fixed w-1/5">
        <SideBar user={authedUser} />
      </header>
      <main className="grid col-start-3 col-span-10 ml-16 py-5">
        <Navigation />
        <Routes>
          <Route path="/" element={<ListPageJamaah />} />
          <Route path="/jamaah/listData" element={<ListPageJamaah />} />
          <Route path="/jamaah/addData" element={<CreatePageJamaah />} />
          <Route path="/jamaah/detailData/:id" element={<DetailPageJamaah />} />
          <Route path="/jamaah/editData/:id" element={<EditPageJamaah />} />
          <Route path="/jamaah/catatan/listData/:id" exact element={<NotesPageJamaah />} />
          <Route path="/jamaah/catatan/detailData/:id/:idNote" exact element={<DetailNotePageJamaah />} />
          <Route path="/jamaah/catatan/editData/:id/:idNote" element={<EditNotePageJamaah user={authedUser} />} />
          <Route path="/jamaah/catatan/addData/:id" element={<CreateNotePageJamaah />} />

          <Route path="/mz/listData" element={<ListPageMZ />} />
          <Route path="/mz/addData" element={<CreatePageMZ />} />
          <Route path="/mz/detailData/:id" element={<DetailPageMZ />} />
          <Route path="/mz/editData/:id" element={<EditPageMZ />} />
          <Route path="/mz/catatan/addData/:id" element={<CreateNotePageMZ />} />
          <Route path="/mz/catatan/listData/:id" element={<NotePageMZ />} />
          <Route path="/mz/catatan/detailData/:id/:idNote" element={<DetailNotePageMZ />} />
          <Route path="/mz/catatan/editData/:id/:idNote" element={<EditNotePageMZ user={authedUser} />} />

          <Route path="/fungsional/listData" element={<ListPageFungsional />} />
          <Route path="/fungsional/addData" element={<CreatePageFungsional />} />
          <Route path="/fungsional/detailData/:id" element={<DetailPageFungsional />} />
          <Route path="/fungsional/editData/:idFlock/:idFunc" element={<EditPageFungsional />} />
          <Route path="/fungsional/editData/:idFlock" element={<EditPageFungsional />} />

          <Route path="/profil" element={<ProfilPage user={authedUser} onLogout={onLogoutHandler} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
