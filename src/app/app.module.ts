import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { AccountComponent } from './components/account/account.component';
import { AppFormComponent } from './components/app-form/app-form.component';

import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
