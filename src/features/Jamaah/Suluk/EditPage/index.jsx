import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Form/Suluk';
import { getFlock, updateSuluk } from 'utils/apiData';
import Header from './layout/Header';

function EditSulukPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [infoSuluk, setInfoSuluk] = useState({ error: false, data: [] });
  const { idflock, idsuluk } = useParams();
  // const navigate = useNavigate();

  const handleEditSuluk = async (value) => {
    try {
      const response = await updateSuluk({ ...value, idsuluk });
      setInfoSuluk(response);
      console.log('Data suluk berhasil diperbarui', infoSuluk);
    } catch (error) {
      console.log('Data suluk gagal ditambahkan', infoSuluk);
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await getFlock(id);
        if (result) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };
    fetchData(idflock);
  }, [idflock]);
  const detailFlock = flock && flock.data;

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header />
      </div>
      <div>
        <Container
          updateSuluk={handleEditSuluk}
          flock={detailFlock && detailFlock}
        />
      </div>
    </div>
  );
}

export default EditSulukPage;
