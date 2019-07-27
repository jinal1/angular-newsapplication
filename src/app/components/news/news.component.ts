import { Component, OnInit } from '@angular/core';
import {Store,select} from'@ngrx/store';
import {state1} from '../../root-store/State/state';
import {LoadSection} from '../../root-store/Actions/action';
import { Observable } from "rxjs";
import {getFilter}from "../../root-store/Selectors/selector";
import * as fromroot from "../../root-store/Selectors/selector";
import {LoadSectionNews,FilterSubsection} from '../../root-store/Actions/action';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsServiceService} from '../../Services/news-service.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newslist:any;
fil;
  constructor(private store:Store<state1>,private route:ActivatedRoute,private service:NewsServiceService) { }

  ngOnInit() {
    // this.fil=this.store.pipe(select(getFilter));
    console.log("inside newa");
   
   
   
    this.store.pipe(map(state1=>state1.ne.newslist)).subscribe(result=>this.newslist=result);
    console.log(this.newslist);
    
   }
   filteredNews()
   {
  this.store.pipe(map(state1=>state1.ne.filter)).subscribe(re=>this.fil=re);
          console.log(this.fil);
          if(this.fil===null)
    {
   
    this.store.pipe(map(state1=>state1.ne.newslist)).subscribe(result=>this.newslist=result);
    console.log(this.newslist);
    }
    else
    {
       this.store.pipe(map(state1=>state1.ne.newslist.filter(a=>a["subsection"]===this.fil))).subscribe(result=>this.newslist=result);
    }
   }

}