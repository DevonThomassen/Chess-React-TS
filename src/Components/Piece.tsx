import React from 'react';

export type Colour = "w" | "b";
export type Type = "King" | "Queen" | "Rook" | "Knight" | "Bishop" | "Pawn";
export type PieceType = `${Colour}${Type}`;

type Pieces = Record<PieceType, ReturnType<typeof require>>;
const pieces: Pieces = {
  wKing: require("../assets/wKing.png"),
  wQueen: require("../assets/wQueen.png"),
  wRook: require("../assets/wRook.png"),
  wKnight: require("../assets/wKnight.png"),
  wBishop: require("../assets/wBishop.png"),
  wPawn: require("../assets/wPawn.png"),
  bKing: require("../assets/bKing.png"),
  bQueen: require("../assets/bQueen.png"),
  bRook: require("../assets/bRook.png"),
  bKnight: require("../assets/bKnight.png"),
  bBishop: require("../assets/bBishop.png"),
  bPawn: require("../assets/bPawn.png"),
}

interface PieceProps {
  id: PieceType;
  position: String;
}

const Piece = ({ id, position }: PieceProps) => {
  const [col, row] = position.split('').map(s => parseInt(s));

  return (
    <div className="piece">
      <img src={pieces[id].default} alt={id} />
    </div>
  );
}

export default Piece;