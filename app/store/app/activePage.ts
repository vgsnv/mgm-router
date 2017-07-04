import { App } from './app'

const ACTIVEPAGE_CHANGE = 'APP/ACTIVEPAGE_CHANGE';

export const activePageChange = (data: App.activePage) => ({
  type: ACTIVEPAGE_CHANGE,
  data
});

export default (prevActivePage: App.activePage = '', action) => {
    switch(action.type){
    case ACTIVEPAGE_CHANGE:
      return action.data;
    default:
      return prevActivePage;
  }
}