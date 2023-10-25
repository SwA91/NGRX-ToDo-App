import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = filtrosValidos.TODOS;

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro: filter }) => {
    let returnValue;
    if (filtrosValidos.COMPLETADOS === filter ||
      filtrosValidos.PENDIENTES === filter ||
      filtrosValidos.TODOS === filter) {
      returnValue = filter;
    } else {
      returnValue = filtrosValidos.TODOS;
    }
    return returnValue;
  }),

);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}