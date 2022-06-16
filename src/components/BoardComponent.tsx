import React from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null)

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell);
    }
  }

  React.useEffect(() => {
    highlightCells();
  }, [selectedCell])

  function highlightCells(){
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard(){
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) =>  
        <React.Fragment key = {index}>
          {row.map(cell => 
            <CellComponent
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              click={click}
            />
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default BoardComponent;
