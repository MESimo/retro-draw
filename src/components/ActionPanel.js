import React, { useState } from 'react';

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList, COLORS } from '../utils';
import Grid from './Grid';

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = (props) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return <div className="action-panel">
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    */}
    <button onClick={() => {
      const newCellList = buildCellList();
      setCellList(newCellList);
    }}>clear all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
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