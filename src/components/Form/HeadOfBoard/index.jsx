/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputHeadOfBoard from './InputHeadOfBoard';

function HeadofBoardContainer({
  onInputChange, buttonOnClick, prevBoard,
}) {
  const [board, setBoard] = useState({
    head1: {
      nameHead: '',
      phoneNumber: '',
      SKNumber: '',
      SKYear: '',
    },
    head2: {
      nameHead: '',
      phoneNumber: '',
      SKNumber: '',
      SKYear: '',
    },
    head3: {
      nameHead: '',
      phoneNumber: '',
      SKNumber: '',
      SKYear: '',
    },
  });
  const headLevel = ['Pengurus 1', 'Pengurus 2', 'Pengurus 3'];

  const handleInputChange = (headKey, field, value) => {
    const updateBoard = { ...board };
    updateBoard[headKey][field] = value;
    setBoard(updateBoard);
  };

  useEffect(() => {
    if (prevBoard !== null && prevBoard !== undefined) {
      setBoard({
        id: prevBoard._id,
        head1: {
          nameHead: prevBoard.head1.nameHead,
          phoneNumber: prevBoard.head1.phoneNumber,
          SKNumber: prevBoard.head1.SKNumber,
          SKYear: prevBoard.head1.SKYear,
        },
        head2: {
          nameHead: prevBoard.head2.nameHead,
          phoneNumber: prevBoard.head2.phoneNumber,
          SKNumber: prevBoard.head2.SKNumber,
          SKYear: prevBoard.head2.SKYear,
        },
        head3: {
          nameHead: prevBoard.head3.nameHead,
          phoneNumber: prevBoard.head3.phoneNumber,
          SKNumber: prevBoard.head3.SKNumber,
          SKYear: prevBoard.head3.SKYear,
        },
      });
    }
  }, [prevBoard]);

  useEffect(() => {
    onInputChange(board);
  }, [buttonOnClick, board, onInputChange]);

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-x-5 gap-y-5 mt-5">
      <div>
        <InputHeadOfBoard
          headData={board && board.head1}
          onInputChange={handleInputChange}
          headLevel={headLevel[0]}
          headKey="head1"
        />
      </div>
      <div>
        <InputHeadOfBoard
          headData={board && board.head2}
          onInputChange={handleInputChange}
          headLevel={headLevel[1]}
          headKey="head2"
        />
      </div>
      <div>
        <InputHeadOfBoard
          headData={board && board.head3}
          onInputChange={handleInputChange}
          headLevel={headLevel[2]}
          headKey="head3"
        />
      </div>
    </div>
  );
}

HeadofBoardContainer.propTypes = {
  onInputChange: PropTypes.func,
  buttonOnClick: PropTypes.bool,
  prevBoard: PropTypes.object,
};

export default HeadofBoardContainer;
