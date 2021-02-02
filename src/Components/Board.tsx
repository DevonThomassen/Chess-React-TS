import React, { useCallback, useState } from 'react';
import Piece, { Colour, PieceType } from './Piece';

type BoardSquare = (PieceType | null);
type BoardRow = BoardSquare[];
type Board = BoardRow[];

interface State {
  player: Colour;
  board: Board;
}

interface BaseRowProps {
  row: number;
}

interface RowProps extends BaseRowProps {
  rowData: BoardRow;
}

interface SquareProps extends BaseRowProps {
  col: number;
  colData?: BoardSquare;
}

const Board = () => {

  const boardInit: Board = [
    ["bRook", "bKnight", "bBishop", "bQueen", "bKing", "bBishop", "bKnight", "bRook"],
    ["bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn",],
    [null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null,],
    ["wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn",],
    ["wRook", "wKnight", "wBishop", "wQueen", "wKing", "wBishop", "wKnight", "wRook"],
  ];

  const [state, setState] = useState<State>({
    player: "w",
    board: boardInit
  });

  // const onTurn = useCallback(() => {
  //   setState({
  //     player: state.player === "w" ? "b" : "w",
  //     board: [
  //       ["bRook", "bKnight", "bBishop", "bQueen", "bKing", "bBishop", "bKnight", "bRook"],
  //       ["bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn",],
  //       [null, null, null, null, null, null, null, null,],
  //       [null, null, null, null, null, null, null, null,],
  //       [null, null, null, null, null, null, null, null,],
  //       [null, null, null, null, null, null, null, null,],
  //       ["wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn",],
  //       ["wRook", "wKnight", "wBishop", "wQueen", "wKing", "wBishop", "wKnight", "wRook"],
  //     ]
  //   });
  // }, [state.player]);

  console.log(state.board);

  return (
    <div className="board">
      {state.board.map((_, i) => (
        <Row key={i} row={i} rowData={state.board[i]} />
      ))}
    </div>
  );
}

const Row = ({ row, rowData }: RowProps) => {
  return (
    <div className="row">
      {rowData.map((v, i) => (
        <Square key={i} row={row} col={8 - i} colData={v} />
      ))}
    </div>
  );
}

const Square = ({ row, col, colData }: SquareProps) => {

  const isWhite = () => {
    return row % 2 ? (col % 2) : !(col % 2);
  }

  const position = String.fromCharCode(97 + row) + col.toString();

  return (
    <div className={`square ${isWhite() ? "white" : "black"}`}>
      { colData! ? <Piece key={`${row}${col}`} id={colData} position={`${row}${col}`} /> : null}
      <p className="location">{position}</p>
    </div>
  );
}

export default Board;