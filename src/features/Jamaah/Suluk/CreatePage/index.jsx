import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Form/Suluk';
import { kajiData, sulukData } from 'utils/suluk';
import { getFlock } from 'utils/apiData';
import Header from './layout/Header';

function CreateSulukPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (idFlock) => {
      try {
        const result = await getFlock(idFlock);
        if (result) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };
    fetchData(id);
  });
  const detailFlock = flock && flock.data;

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header />
      </div>
      <div>
        <Container kaji={kajiData} suluk={sulukData} gender={detailFlock && detailFlock.gender} />
      </div>
    </div>
  );
}

export default CreateSulukPage;
