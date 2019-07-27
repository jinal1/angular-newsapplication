import { Component, OnInit } from '@angular/core';
import {Store,select} from'@ngrx/store';
import {state1} from '../../root-store/State/state';
import {LoadSectionNews} from '../../root-store/Actions/action';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsServiceService} from '../../Services/news-service.service';


@Component({
  selector: 'app-wholeapp',
  templateUrl: './wholeapp.component.html',
  styleUrls: ['./wholeapp.component.css']
})
export class WholeappComponent implements OnInit {
paramname:any;

subsection:string[]=[];
title:string[]=[];
abstract:string[]=[];
resonse:JSON;
filterText : string;
res:any={"status":"OK","copyright":"Copyright (c) 2019 The New York Times Company. All Rights Reserved.","section":"health","last_updated":"2019-02-18T05:47:14-05:00","num_results":31,"results":[{"section":"Health","subsection":"Mind","title":"A Mother Learns the Identity of Her Child\u2019s Grandmother. A Sperm Bank Threatens to Sue.","abstract":"The results of a consumer genetic test identified the mother of the man whose donated sperm was used to conceive Danielle Teuscher\u2019s daughter. Legal warnings soon followed.","url":"https:\/\/www.nytimes.com\/2019\/02\/16\/health\/sperm-donation-dna-testing.html","byline":"By JACQUELINE MROZ","item_type":"Article","updated_date":"2019-02-16T05:00:10-05:00","created_date":"2019-02-16T05:00:10-05:00","published_date":"2019-02-16T05:00:10-05:00","material_type_facet":"","kicker":"","des_facet":["Artificial Insemination","Sperm","Families and Family Life","Genetics and Heredity","Tests (Medical)","Privacy","your-feed-science"],"org_facet":["23andMe","California Cryobank","Donor Sibling Registry"],"per_facet":[],"geo_facet":["Portland (Ore)","Spokane (Wash)"],"multimedia":[{"url":"https:\/\/static01.nyt.com\/images\/2019\/02\/19\/science\/19SCI-SPERMBANK1\/19SCI-SPERMBANK1-thumbStandard.jpg","format":"Standard Thumbnail","height":75,"width":75,"type":"image","subtype":"photo","caption":"Danielle Teuscher and her daughter, Zoe Fordney. With widespread genetic testing, sperm donor anonymity \u201cwill suffer the same fate as the cassette tape,\u201d one expert said.","copyright":"Moriah Ratner for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2019\/02\/19\/science\/19SCI-SPERMBANK1\/19SCI-SPERMBANK1-thumbLarge.jpg","format":"thumbLarge","height":150,"width":150,"type":"image","subtype":"photo","caption":"Danielle Teuscher and her daughter, Zoe Fordney. With widespread genetic testing, sperm donor anonymity \u201cwill suffer the same fate as the cassette tape,\u201d one expert said.","copyright":"Moriah Ratner for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2019\/02\/19\/science\/19SCI-SPERMBANK1\/19SCI-SPERMBANK1-articleInline.jpg","format":"Normal","height":127,"width":190,"type":"image","subtype":"photo","caption":"Danielle Teuscher and her daughter, Zoe Fordney. With widespread genetic testing, sperm donor anonymity \u201cwill suffer the same fate as the cassette tape,\u201d one expert said.","copyright":"Moriah Ratner for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2019\/02\/19\/science\/19SCI-SPERMBANK1\/19SCI-SPERMBANK1-mediumThreeByTwo210.jpg","format":"mediumThreeByTwo210","height":140,"width":210,"type":"image","subtype":"photo","caption":"Danielle Teuscher and her daughter, Zoe Fordney. With widespread genetic testing, sperm donor anonymity \u201cwill suffer the same fate as the cassette tape,\u201d one expert said.","copyright":"Moriah Ratner for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2019\/02\/19\/science\/19SCI-SPERMBANK1\/19SCI-SPERMBANK1-superJumbo.jpg","format":"superJumbo","height":1365,"width":2048,"type":"image","subtype":"photo","caption":"Danielle Teuscher and her daughter, Zoe Fordney. With widespread genetic testing, sperm donor anonymity \u201cwill suffer the same fate as the cassette tape,\u201d one expert said.","copyright":"Moriah Ratner for The New York Times"}],"short_url":"https:\/\/nyti.ms\/2UVyPaq"},{"section":"Health","subsection":"","title":"Embryo \u2018Adoption\u2019 Is Growing, but It\u2019s Getting Tangled in the Abortion Debate","abstract":"Many agencies that offer donated embryos, including most of those supported by federal grants, are affiliated with Christian or anti-abortion rights organizations.","url":"https:\/\/www.nytimes.com\/2019\/02\/17\/health\/embryo-adoption-donated-snowflake.html","byline":"By CAROLINE LESTER","item_type":"Article","updated_date":"2019-02-17T20:54:34-05:00","created_date":"2019-02-17T17:20:57-05:00","published_date":"2019-02-17T17:20:57-05:00","material_type_facet":"","kicker":"","des_facet":["In Vitro Fertilization","Infertility","Adoptions","embryos","Abortion","Faith-Based Initiatives"],"org_facet":["Health and Human Services Department"],"per_facet":[],"geo_facet":[],"multimedia":[{"url":"https:\/\/static01.nyt.com\/images\/2018\/12\/12\/science\/00EMBRYOS\/00EMBRYOS-thumbStandard.jpg","format":"Standard Thumbnail","height":75,"width":75,"type":"image","subtype":"photo","caption":"Monika Broecker gave birth to her daughter, Emilia, using a donated embryo.","copyright":"Katrina Britney Davis for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2018\/12\/12\/science\/00EMBRYOS\/00EMBRYOS-thumbLarge.jpg","format":"thumbLarge","height":150,"width":150,"type":"image","subtype":"photo","caption":"Monika Broecker gave birth to her daughter, Emilia, using a donated embryo.","copyright":"Katrina Britney Davis for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2018\/12\/12\/science\/00EMBRYOS\/00EMBRYOS-articleInline.jpg","format":"Normal","height":127,"width":190,"type":"image","subtype":"photo","caption":"Monika Broecker gave birth to her daughter, Emilia, using a donated embryo.","copyright":"Katrina Britney Davis for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2018\/12\/12\/science\/00EMBRYOS\/merlin_147984297_cac32340-34ac-4dbd-aed5-2604ff52057f-mediumThreeByTwo210.jpg","format":"mediumThreeByTwo210","height":140,"width":210,"type":"image","subtype":"photo","caption":"Monika Broecker gave birth to her daughter, Emilia, using a donated embryo.","copyright":"Katrina Britney Davis for The New York Times"},{"url":"https:\/\/static01.nyt.com\/images\/2018\/12\/12\/science\/00EMBRYOS\/merlin_147984297_cac32340-34ac-4dbd-aed5-2604ff52057f-superJumbo.jpg","format":"superJumbo","height":1365,"width":2048,"type":"image","subtype":"photo","caption":"Monika Broecker gave birth to her daughter, Emilia, using a donated embryo.","copyright":"Katrina Britney Davis for The New York Times"}],"short_url":"https:\/\/nyti.ms\/2V4bof0"}]};
  constructor(private _store:Store<state1>,private route:ActivatedRoute,private service:NewsServiceService) { }

  ngOnInit() {
console.log("hi");
this.paramname=this.route.snapshot.paramMap.get('secname');
this.service.getNewsList(this.paramname).subscribe(resp=>{this.resonse=resp;

console.log(this.resonse);
this.filterText="Inside Subscribe"});//err => {
                                    // Log errors if any
                                   // console.log("hello"+err);
                                //});
                                console.log("hello"+this.resonse+this.filterText);
                                console.log(this.res.results);
for( var i=0;i<this.res.results.length;i++)
{
  console.log(this.res.results[i].subsection);
  if(this.res.results[i].subsection!="")
  {
    this.subsection.push(this.res.results[i].subsection);
  }
}
for( var i=0;i<this.res.results.length;i++)
{
  console.log(this.res.results[i].title);
  
    this.title.push(this.res.results[i].title);
  
}
for( var i=0;i<this.res.results.length;i++)
{
  console.log(this.res.results[i].abstract);
 
  
    this.abstract.push(this.res.results[i].abstract);
  
}
 //this._store.dispatch(new LoadSectionNews(this.paramname));

   console.log(this.route.snapshot.paramMap.get('secname'));
  }

}