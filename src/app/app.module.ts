import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { environment } from '../environments/environment';
import {reducers} from './root-store/Reducers/reducer';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { WholeappComponent } from './components/wholeapp/wholeapp.component';
import { NewsServiceService } from './Services/news-service.service';
import { HttpModule, JsonpModule } from '@angular/http';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'todos',
  //   pathMatch: 'full'
  // },
  {
    path: 'section/:secname',
    component:AppComponent,
 
    // children: [
    //   { path: 'opinion', component: AppComponent }]
    }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  StoreModule.forRoot(reducers),
  !environment.production ? StoreDevtoolsModule.instrument() : []
  ,RouterModule.forRoot(routes) ,HttpModule,JsonpModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, NavbarComponent, NewsComponent, NewsItemComponent, SectionComponent, WholeappComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ NewsServiceService]
})
export class AppModule { }
