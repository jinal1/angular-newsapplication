import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Store,select} from'@ngrx/store';
import {state1} from '../../root-store/State/state';
import {LoadSection} from '../../root-store/Actions/action';
import { Observable } from "rxjs";
import * as fromroot from "../../root-store/Selectors/selector";
import {LoadSectionNews,FilterSubsection} from '../../root-store/Actions/action';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsServiceService} from '../../Services/news-service.service';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

subsec;
fi;
jinaln;
newslist;
 @Output() myEvent = new EventEmitter();
  constructor(private store:Store<state1>,private route:ActivatedRoute,private service:NewsServiceService) { }

  ngOnInit() {
   
    this.store.pipe(map(state1=>state1.ne.subsection)).subscribe(section=>this.subsec=section);
    console.log(this.subsec);
    

    
    this.store.pipe(map(state1=>state1.ne.newslist)).subscribe(result=>this.newslist=result);
    console.log(this.newslist);
    
  }
  subnews(s)
  {
    console.log("jinal");
    console.log(s);

    this.store.pipe(map(state1=>state1.ne.subsection)).subscribe(section=>this.subsec=section);
    console.log(this.subsec);
     this.store.pipe(map(state1=>state1.ne.newslist)).subscribe(result=>this.newslist=result);
    console.log(this.newslist);
    const subsections=this.subsec;
    const nelist=this.newslist;
    const filtersubsection=s;

    const ab={subsections,filtersubsection,nelist}
    this.store.dispatch(new FilterSubsection(ab));
       
          if(s===null)
    {
   
    this.store.pipe(map(state1=>state1.ne.newslist)).subscribe(result=>this.newslist=result);
    console.log(this.newslist);
    }
    else
    {
       this.store.pipe(map(state1=>state1.ne.newslist.filter(a=>a["subsection"]===s))).subscribe(result=>this.newslist=result);
     
 
  }

}
}