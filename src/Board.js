import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  console.log("Board ran")
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    console.log("createBoard()")
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      initialBoard.push(Array.from({ length: ncols }, () => (
        Math.random() * 1 < chanceLightStartsOn ? true : false)
      ))
    }
    return initialBoard;
  }


  /**Return a boolean indicating whether the player win */
  function hasWon() {
    console.log("hasWon starts nrow")

    for (let i = 0; i < board.length; i++) {   
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === true) return false;
      }
    }
    return true;
  }

  function flipCellsAround(coord) {
    console.log("flipCellsAround() ran")
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const oldBoardCopy = oldBoard.map(row => [...row])
      
      flipCell(y, x, oldBoardCopy);
      flipCell(y + 1, x, oldBoardCopy);
      flipCell(y - 1, x, oldBoardCopy);
      flipCell(y, x + 1, oldBoardCopy);
      flipCell(y, x - 1, oldBoardCopy);

      return oldBoardCopy
    });
  }
  
  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return (<p>"You've won!"</p>);
  }

  // make table board
  const newBoard = [];
  for (let i = 0; i < board.length; i++) {
    let row = [];
    for (let j = 0; j < board[i].length; j++) {
      const isLit = board[i][j];
      const cellCoord = `${i}-${j}`; 
      row.push(<td><Cell flipCellsAroundMe={flipCellsAround} coord={cellCoord} isLit={isLit} /></td>)
    }
    newBoard.push(<tr>{row}</tr>);
  }

  return newBoard;
}

Board.defaultProps = {
  nrows: 5,
  ncols: 7,
  chanceLightStartsOn: 0.2
}

export default Board;

