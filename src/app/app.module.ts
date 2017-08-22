import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS,AuthHttp ,AuthConfig} from 'angular2-jwt';


import { AppComponent } from './app.component';


import { DataService } from './services/data.service';
import { BookComponent } from './book/book.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule,Http ,RequestOptions} from '@angular/http';
import { LoginComponent } from './login/login.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';


const appRoutes: Routes = [
  {path:'book/:isbn', component:BookComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'addbook', component:AddBookComponent},
  {path:'follow-up', component:FollowUpComponent},
  {path:'searchperson/:isbn', component:SearchPersonComponent},
  {path:'borrowbook/:isbn/:username', component:BorrowBookComponent},
  {path:'signup', component:SignUpComponent},
  {path:'validateRegistration/:key', component:ValidateRegistrationComponent},


  { path: '**', component: PageNotFoundComponent }
];


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddBookComponent,
    FollowUpComponent,
    SearchPersonComponent,
    BorrowBookComponent,
    SignUpComponent,
    ValidateRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ...
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
