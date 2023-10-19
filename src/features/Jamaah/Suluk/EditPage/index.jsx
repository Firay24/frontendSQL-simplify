import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Form/Suluk';
import { getSuluk, getFlock, updateSuluk } from 'utils/apiData';
import { kajiData, sulukData } from 'utils/suluk';
import Header from './layout/Header';

function EditSulukPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [infoSuluk, setInfoSuluk] = useState({ error: false, data: [] });
  const { idsuluk, idflock } = useParams();
  // const navigate = useNavigate();

  const handleEditSuluk = async (value) => {
    try {
      const response = await updateSuluk(value);
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

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const result = await getSuluk(id);
        if (result !== undefined && result !== null) {
          setInfoSuluk(result);
        }
      } catch (error) {
        setInfoSuluk({ error: true, data: null });
      }
    };
    fetchData(idsuluk);
  }, [idsuluk]);
  const dataSuluk = infoSuluk && infoSuluk.data;

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header />
      </div>
      <div>
        <Container
          kaji={kajiData}
          suluk={sulukData}
          flock={detailFlock && detailFlock}
          prevFlock={dataSuluk && dataSuluk}
          updateSuluk={handleEditSuluk}
        />
      </div>
    </div>
  );
}

export default EditSulukPage;
