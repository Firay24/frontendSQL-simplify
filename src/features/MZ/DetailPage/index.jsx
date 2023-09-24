/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBoard } from 'utils/apiData';
import Loading from 'components/Loading';
import Header from './Layout/Header';
import DetailsContainer from './Layout/DetailsContainer';

function DetailPage() {
  const [board, setBoard] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (idBoard) => {
      try {
        const result = await getBoard(idBoard);
        if (result !== undefined && result !== null) {
          setBoard(result);
        }
      } catch (error) {
        setBoard({ error: true, data: null });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(id);
  });
  const detailBoard = board && board.data && board.data.board;

  return (
    <div className="mt-4 mr-10 mb-6">
      <Header name="Test" regency="Banyuwangi" />
      <div>
        {
          isLoading ? <Loading /> : <DetailsContainer id={id} board={detailBoard !== null && detailBoard !== undefined ? detailBoard : []} />
        }
      </div>
    </div>
  );
}

export default DetailPage;
