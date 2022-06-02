import React from 'react';
import Cell from './Cell';
import { COLORS } from '../utils';

/**
 * The Palette component needs to communicate the activeColor to other components. 
 */
const Palette = (props) => {
 
  const activeColor = props.activeColor;
  const setActiveColor = props.setActiveColor;

  /**
   * For the template, you need to:
   * - map over COLORS
   * - return from the mapping function a <Cell /> which:
   *    - has a unique key (you can use 'palette-' and the index of the color)
   *    - has a prop of color equal to the color from the map
   *    - has a prop of isActive equal to true if activeColor equals the color from the map
   *    - has a prop of handleClick which is a function that calls setActiveColor, passing it 
   *      the color from the map
   */

  return (
    <div className="palette">
      {
        COLORS.map((color, index) => {
          return <Cell 
                    key={ 'palette-' + index } 
                    color={ color }
                    isActive={ activeColor === color ? true : false }
                    handleClick={() => {setActiveColor(color)}}/>
        })
      }
    </div>
  )
    }

export default Palette;