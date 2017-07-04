import { combineReducers } from 'redux';
import activePage from './activePage';

export interface App {
  activePage: string;
}

export namespace App {
  export class activePage {}
}

const app = combineReducers({
  activePage,
})

export default app;