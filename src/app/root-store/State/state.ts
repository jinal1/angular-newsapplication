import {news} from '../../models/News';


export type newsstate=
{
  mails:{"id":number,"from":string,"to":string,"time":Date ,"subject":string,"inbox":boolean,"trash":boolean,"draft":boolean,"sentmail":boolean}[];
  section:string[];
  subsection:string[];
  newslist:any[];
  filter:string;
}
export   interface state1
{
  ne:newsstate;
}

// export const initialstate:state1
// =
// {
// section:['opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine','realestate','automobiles'],
// subsection:['media','politics','Europe','Sunday Review','Asia pasific','Middle East','Art & Design','Book Review','Personal Tech','Family','Television'],
// newslist:[{section:'world',subsection:'Middle East',title:'abc',abstract:'def'},{section:'books',subsection:'Book Review',title:'jinal',abstract:'payal'},
// {section:'world',subsection:'Middle East',title:'hello',abstract:'hi'}],
// filter:null
// }

