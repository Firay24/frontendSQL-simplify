/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlock, getFunctionals } from 'utils/apiData';
import Loading from 'components/Loading';
import Header from './Layout/Header';
import DetailContainer from './Layout/DetailContainer';

function DetailPage() {
  const [flock, setFlock] = useState({ error: false, data: [] });
  const [functionals, setFunctionals] = useState({ error: false, data: [] });
  const [functional, setFunctional] = useState({ error: false, data: [] });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isFlock, setIsFlock] = useState(true);

  useEffect(() => {
    const fetchData = async (idFlock) => {
      try {
        const result = await getFlock(idFlock);
        if (result !== undefined && result !== null) {
          setFlock(result);
          setIsLoading(false);
        }
      } catch (error) {
        setFlock({ error: true, data: null });
        setIsLoading(false);
      }
    };

    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data && flock.data.flock;

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
    if (detailFlock !== undefined && dataFunctionals !== undefined) {
      const detailFunctional = detailFlock && dataFunctionals && dataFunctionals.find((functionalData) => functionalData.nik === detailFlock.nik && functionalData.fathersName === detailFlock.fathersName);
      if (detailFunctional) {
        setFunctional(detailFunctional);
      }
    }
  }, [dataFunctionals, detailFlock]);

  useEffect(() => {
    if (detailFlock && detailFlock.gender === '' && detailFlock.job === '') {
      setIsFlock(false);
    }
  }, [detailFlock]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header name={detailFlock && detailFlock.name} nik={detailFlock && detailFlock.nik} isFlock={isFlock} />
      </div>
      <p>{isLoading}</p>
      <div>
        {
          isLoading ? <Loading /> : <DetailContainer id={id} flock={detailFlock && detailFlock} functional={functional && functional} />
        }
      </div>
    </div>
  );
}

export default DetailPage;
