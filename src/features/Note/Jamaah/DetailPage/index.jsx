/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteFlock } from 'utils/apiData';
import Loading from 'components/Loading';
import Header from './Layout/Header';
import DetailContainer from './Layout/DetailContainer';

function DetailNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getNoteFlock(idParams);
        setNote(result);
        setIsLoading(false);
      } catch (error) {
        setNote({ error: true, data: [] });
      }
    };
    fetchData(id);
  }, [id]);
  const detailNote = note && note.data && note.data.data;

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header />
      </div>
      <div>
        {
          isLoading ? <Loading /> : <DetailContainer infoNote={detailNote[0]} id={id} />
        }
      </div>
    </div>
  );
}

export default DetailNotePage;
