/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { getFunctionals, getFlocks } from 'utils/apiData';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import TableList from './Layout/TableList';

function ListPage() {
  const [functionals, setFunctionals] = useState({ error: false, data: [] });
  const [flocks, setFlocks] = useState({ error: false, data: [] });
  const [filterFlocks, setFilterFlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFunctionals();
        if (result.data.functionals) {
          setFunctionals(result);
          setIsLoading(false);
        }
      } catch (error) {
        setFunctionals({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const { data } = functionals;
  const dataFunctionals = data.functionals || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        if (result) {
          setFlocks(result);
          setIsLoading(false);
        }
      } catch (error) {
        setFlocks({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  // const { dataFlock } = flocks;
  const dataFlocks = flocks.data.flocks || [];

  useEffect(() => {
    const dataFilterFlocks = dataFunctionals.map((funcItem) => {
      const { nik, fathersName } = funcItem;
      const filteredData = dataFlocks.find((flockItem) => flockItem.nik === nik && flockItem.fathersName === fathersName);
      return filteredData;
    });

    // Menghapus nilai-nilai null/undefined dari array
    const filteredAndNonNullData = dataFilterFlocks.filter(Boolean);

    if (filteredAndNonNullData.length > 0) {
      setFilterFlocks(filteredAndNonNullData);
      setIsLoading(false);
    }
  }, [dataFunctionals, dataFlocks]);

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
            : <TableList flocks={filterFlocks && filterFlocks} />
        }
      </div>
    </div>
  );
}

export default ListPage;
