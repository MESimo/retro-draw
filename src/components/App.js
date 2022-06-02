import React, { useState } from 'react';

import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';
import { COLORS, buildCellList } from '../utils';

/**
 * The App component is responsible for helping its children communicate 
 * with each other via state objects, and state functions.
 */
const App = () => {
 
    const [activeColor, setActiveColor] = useState(COLORS[0])
    const [cellList, setCellList] = useState(buildCellList())

  return <div className="app">
    <Header />
    <Palette activeColor={activeColor} setActiveColor={setActiveColor} />
    <Grid activeColor={activeColor} cellList={cellList} setCellList={setCellList} />
    <ActionPanel activeColor={activeColor} cellList={cellList} setCellList={setCellList} />
  </div>
}

export default App;