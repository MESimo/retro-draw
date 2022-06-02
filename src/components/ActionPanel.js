import React from 'react';
import { buildCellList} from '../utils';

const ActionPanel = (props) => {
  
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return <div className="action-panel">

          <button onClick={() => {
            const newCellList = buildCellList();
            setCellList(newCellList);
          }}>clear all</button>
   
          <button onClick={() => {
            const fillCellList = buildCellList();
            fillCellList.forEach((cell) => {
                cell.color = activeColor;
            })
            setCellList(fillCellList)
          }}
          >fill all</button>
    {/* 
      This buttonm needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
    <button onClick={() => {
      const emptyCellList = buildCellList();
      cellList.forEach((cell, index) => {
        if (cell.color === null){
          emptyCellList[index].color = activeColor;
        }
        else{
          emptyCellList[index].color = cell.color;
        }
      })
      setCellList(emptyCellList);
    }}
    >fill empty</button>
  </div>
}

export default ActionPanel;