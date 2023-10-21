/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailContainer from 'components/Container/Suluk';
import { getSuluk } from 'utils/apiData';
import Loading from 'components/Loading';
import Header from './layout/Header';

function DetailSulukPage() {
  const [infoSuluk, setInfoSuluk] = useState({ error: false, data: [] });
  const { idsuluk, idflock } = useParams();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (dataSuluk !== undefined) {
      setIsLoading(false);
    }
  }, [dataSuluk]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header />
      </div>
      <div>
        {
          isLoading ? <Loading /> : (
            <DetailContainer {...dataSuluk} idflock={idflock} />
          )
        }
      </div>
    </div>
  );
}

export default DetailSulukPage;
