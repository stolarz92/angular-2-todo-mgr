import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Angular2TokenService } from 'angular2-token';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './services/todo.service';
import { AuthService } from './services/auth.service';
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [Angular2TokenService,
              AuthService,
              AuthGuard,
              TodoService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
