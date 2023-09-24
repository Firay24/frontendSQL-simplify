/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { getBoards, getNotesBoard } from 'utils/apiData';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import TableList from './Layout/TableList';

function ListPage() {
  const [boards, setBoards] = useState({ error: false, data: [] });
  const [notesBoard, setNotesBoard] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBoards();
        setBoards(result);
      } catch (error) {
        setBoards({ error: true, data: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const dataBoards = boards && boards.data && boards.data.boards;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesBoard();
        setNotesBoard(result);
      } catch (error) {
        setNotesBoard({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const dataNoteBoard = notesBoard && notesBoard.data && notesBoard.data.notes;

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
            : <TableList boards={dataBoards && dataBoards} notesBoard={dataNoteBoard && dataNoteBoard} />
        }
      </div>
    </div>
  );
}

export default ListPage;
