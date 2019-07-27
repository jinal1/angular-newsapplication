import {state1} from'../State/state';
import {createSelector,createFeatureSelector} from '@ngrx/store';
export const getMainState=state=>state.ne;

export const getsection=createSelector(
  
  getMainState,
  states=>states.section
  );
  export const getFilter=createSelector(
  
  getMainState,
  states=>states.filter
  );
  export const getfilterednews=createSelector(
  
  getMainState,
  
  states=>states.newslist.filter(a=>a["subsection"]===states.filter)
  );
