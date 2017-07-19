import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { DataService } from './services/data.service';
import { BookComponent } from './book/book.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path:'book', component:BookComponent},
  {path:'login', component:LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,         // <-- add this
    ReactiveFormsModule  // <-- and this
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
