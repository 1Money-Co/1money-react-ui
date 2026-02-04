import { createContext } from 'react';
import { GRID_DEFAULT_GUTTER } from './constants';

export interface GridContextValue {
  gutter: [number, number];
}

export const GridContext = createContext<GridContextValue>({
  gutter: GRID_DEFAULT_GUTTER
});
