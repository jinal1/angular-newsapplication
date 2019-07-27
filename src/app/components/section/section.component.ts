import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import {Store,select} from'@ngrx/store';
import {state1} from '../../root-store/State/state';
import {LoadSection} from '../../root-store/Actions/action';
import { Observable } from "rxjs";
import {getsection}from "../../root-store/Selectors/selector";
import {LoadSectionNews,FilterSubsection} from '../../root-store/Actions/action';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsServiceService} from '../../Services/news-service.service';

import {hello} from './object';
 
 import {map} from 'rxjs/operators';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

paramname:any;
abc:string;

subsection:string[]=[];
title:string[]=[];
sec:Observable<string[]>;
abstracts:string[]=[];
results:object[];
result:object;
response:any;
mainres:any;
filterText : string;
newslist;
  constructor(private store:Store<state1>,private route:ActivatedRoute,private service:NewsServiceService) { }

  ngOnInit() {
              console.log("hi");
              this.store.dispatch(new LoadSection());
              // this.store.pipe(map(state1=>state1.ne.section)).subscribe(section=>console.log("section",section));
 this.sec=this.store.pipe(select(getsection));

              // this.store.pipe(map(state1=>state1.ne.section)).subscribe(section=>this.sec=section);
             // console.log(this.sec);
              this.paramname=this.route.snapshot.paramMap.get('secname');
             /* if(this.paramname!=null)
                  {
                    this.service.getNewsList(this.paramname).pipe(map(response=>response.results)).subscribe(resu=> {this.results=resu as object[];
                      console.log(this.results);


                      for(var i=0;i<this.results.length;i++)
                            {
                            this.result=this.results[i];
                            if(this.result["subsection"]!="")
                                {

                                  this.subsection.push(this.result["subsection"]);
                                  this.abstracts.push(this.result["abstract"]);
                                  this.title.push(this.result["title"]);
                                  }
                                }

                      }
                      );

          this.subsection=this.subsection.filter((el, i, a) => i === a.indexOf(el));
for(var i=0;i<this.subsection.length;i++)
{
  console.log(this.subsection[i]);
}
var se=this.paramname;
var subsections=this.subsection;
var titles=this.title;
var abstract=this.abstracts;
const ab={se,subsections,titles,abstract};
this.store.dispatch(new LoadSectionNews(ab));       
     this.subsection=[]; 
     this.title=[];  
     this.abstracts=[];               
                              

  }*/
  }



  async dosomething(s)
  {
    console.log(s);


 this.results = await this.service.getNewsList(s).pipe(map(response=>response.results)).toPromise();
console.log(this.results);
for(var i=0;i<this.results.length;i++)
{
  this.result=this.results[i];
if(this.result["subsection"]!="")
{
this.subsection.push(this.result["subsection"]);

this.abstracts.push(this.result["abstract"]);
this.title.push(this.result["title"]);
}
}


// this.service.getNewsList(s).pipe(map(response=>response.results)).subscribe(resu=>


// {this.results=resu as object[];
// console.log(this.results);



// for(var i=0;i<this.results.length;i++)
// {
//   this.result=this.results[i];
// if(this.result["subsection"]!="")
// {
// this.subsection.push(this.result["subsection"]);

// this.abstracts.push(this.result["abstract"]);
// this.title.push(this.result["title"]);
// }
// }

// }
// );

this.subsection=this.subsection.filter((el, i, a) => i === a.indexOf(el));
// for(var i=0;i<this.subsection.length;i++)
// {
//   console.log(this.subsection[i]);
// }
var se=s;
var subsections=this.subsection;
console.log("hello");
console.log(subsections);
// var titles=this.title;
// console.log(titles);
// var abstract=this.abstracts;
var newslist=this.results;
console.log("hellooooo1");
console.log(newslist);
const ab={se,subsections,newslist};
//console.log(abstract);
this.store.dispatch(new LoadSectionNews(ab));
this.subsection=[]; 
    this.title=[];  
   this.abstracts=[];               

  
  }

}