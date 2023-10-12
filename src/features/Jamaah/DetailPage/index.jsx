/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getFlock, getFunctionals,
} from 'utils/apiData';
import Loading from 'components/Loading';
import ContentNotFound from 'components/404/Content';
import Header from './Layout/Header';
import DetailsContainer from './Layout/DetailsContainer';
import TableListSuluk from './Layout/TableListSuluk';
import TableListClass from './Layout/TableListClass';

function DetailPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [functionals, setFunctionals] = useState({ error: false, data: [] });
  const [functional, setFunctional] = useState({ error: false, data: [] });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (idFlock) => {
      try {
        const result = await getFlock(idFlock);
        if (result !== undefined && result !== null) {
          setFlock(result);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };

    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFunctionals();
        setFunctionals(result);
      } catch (error) {
        setFunctionals({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataFunctional = functionals && functionals.data && functionals.data.functionals;

  useEffect(() => {
    if (detailFlock !== undefined && dataFunctional !== undefined) {
      const detailFunctional = detailFlock && dataFunctional && dataFunctional.find((functionalData) => functionalData.nik === detailFlock.nik && functionalData.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
      setFunctional(detailFunctional);
    }
  }, [dataFunctional, detailFlock]);

  useEffect(() => {
    if (detailFlock !== undefined) {
      setIsLoading(false);
    }
  }, [detailFlock]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header
          name={detailFlock !== undefined ? detailFlock.name : ''}
          nik={detailFlock !== undefined ? detailFlock.nik : ''}
          isFunctional={functional === undefined}
        />
      </div>
      <div>
        {
          isLoading ? <Loading />
            : (
              <DetailsContainer
                id={id}
                flock={detailFlock !== null && detailFlock !== undefined ? detailFlock : []}
              />
            )
        }
      </div>
      <div className="mt-10">
        <h2 className="text-base text-basic-blue font-medium">Informasi suluk</h2>
        {
          isLoading ? <Loading />
            : detailFlock
              ? (
                <TableListSuluk
                  suluks={detailFlock && detailFlock.suluks}
                  idFlock={id}
                />
              )
              : <ContentNotFound text="Informasi suluk tidak tersedia" />
        }
      </div>
      <div className="mt-8">
        <h2 className="text-base text-basic-blue font-medium">Informasi kelas</h2>
        {
          isLoading ? <Loading />
            : detailFlock
              ? (
                <TableListClass
                  classes={detailFlock && detailFlock.classes}
                  idFlock={id}
                />
              ) : <ContentNotFound text="Informasi kelas tidak tersedia" />
        }
      </div>
    </div>
  );
}

export default DetailPage;
