import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { getFlocks, getNotesFlock } from 'utils/apiData';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import TableList from './Layout/TableList';

function ListPage() {
  const [flocks, setFlocks] = useState({ error: false, data: [] });
  const [notesFlock, setNotesFlock] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        setFlocks(result);
        setIsLoading(false);
      } catch (error) {
        setFlocks({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);

  const { data } = flocks;
  const dataFlock = data.flocks || []; // Add a check for data
  const dataFlockFilter = dataFlock && dataFlock.filter((item) => (
    item.gender !== '' || item.job !== ''
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesFlock();
        setNotesFlock(result);
        setIsLoading(false);
      } catch (error) {
        setNotesFlock({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataNotesFlock = notesFlock && notesFlock.data && notesFlock.data.notes;

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header />
      </div>
      <div>
        <SearchField />
      </div>
      <div>
        {
          isLoading ? <Loading />
            : <TableList flocks={dataFlockFilter && dataFlockFilter} notesFlock={dataNotesFlock} />
        }
      </div>
    </div>
  );
}

export default ListPage;
