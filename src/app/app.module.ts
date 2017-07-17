import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { DataService } from './services/data.service';
import { BookComponent } from './book/book.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  {path:'book', component:BookComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
