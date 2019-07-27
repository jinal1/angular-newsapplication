import {Actions,ActionList} from '../Actions/action';
import { state1,newsstate } from '../State/state';

import {ActionReducerMap,MetaReducer} from '@ngrx/store';

const initialstate:newsstate={
 section:['opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine','realestate','automobiles'],
subsection:['media','politics','Europe','Sunday Review','Asia pasific','Middle East','Art & Design','Book Review','Personal Tech','Family','Television'],
newslist:[{section:'world',subsection:'Middle East',title:'abc',abstract:'def'},{section:'books',subsection:'Book Review',title:'jinal',abstract:'payal'},
{section:'world',subsection:'Middle East',title:'hello',abstract:'hi'}],
filter:null
     
}
function featureReducer(astate :newsstate=initialstate, action: Actions):

 newsstate {
  switch (action.type) {

    case ActionList.LoadSection: 
      return {
   ...astate,
section:['opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine','realestate','automobiles'],
subsection:['media','politics','Europe','Sunday Review','Asia pasific','Middle East','Art & Design','Book Review','Personal Tech','Family','Television'],
newslist:[{section:'world',subsection:'Middle East',title:'t1LoadSection',abstract:'def'},{section:'books',subsection:'Book Review',title:'t2LoadSection',abstract:'payal'},
{section:'world',subsection:'Middle East',title:'t3LoadSection',abstract:'hi'}],
filter:null
      }



     
 
    case ActionList.LoadSectionNews: 
      return  {
      

       ...astate,
  section:['opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine','realestate','automobiles'],
subsection:action.payload.subsections,
newslist:action.payload.newslist,
filter:null
     

        
      };
  
    case ActionList.FilterSubsection:
      return {
        ...astate,
    section:['opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine','realestate','automobiles'],
newslist:action.payload.nelist,
filter:action.payload.filtersubsection
     
      };
    
  
    default: 
      return astate;
   
  }
}
export const reducers:ActionReducerMap<state1>
=
{
 ne:featureReducer
};
