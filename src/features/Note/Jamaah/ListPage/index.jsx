/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteFlock } from 'utils/apiData';
import Loading from 'components/Loading';
import NotFoundContent from 'components/404/Content';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import TableList from './Layout/TableList';

function ListPageNote() {
  const [noteFlock, setNoteFlock] = useState({ error: false, data: [] });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getNoteFlock(idParams);
        if (result) {
          setNoteFlock(result);
          setIsLoading(false);
        }
      } catch (error) {
        setNoteFlock({ error: true, data: null });
      }
    };

    fetchData(id);
  }, [id]);
  const detailNote = noteFlock && noteFlock.data && noteFlock.data.note;

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header id={id} />
      </div>
      <div>
        <SearchField />
      </div>
      <div>
        {
          isLoading ? <Loading />
            : (detailNote === null
              ? (
                <div className="mt-10">
                  <NotFoundContent text="Tidak terdapat catatan" />
                </div>
              ) : <TableList notes={detailNote} idFlock={id} />)
        }
      </div>
    </div>
  );
}

export default ListPageNote;
