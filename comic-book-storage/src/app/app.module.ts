import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComicBookListComponent } from './comic-book-list/comic-book-list.component';
import { EditComicBookComponent } from './edit-comic-book/edit-comic-book.component';
import { HttpService } from './shared/http.service';

import {Ng2TableModule} from 'ng2-table';
import {CommonModule} from '@angular/common';
import {PaginationModule, PaginationConfig} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicBookListComponent,
    EditComicBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Ng2TableModule,
    PaginationModule,
    CommonModule,
    DatepickerModule.forRoot(),
  ],
  providers: [HttpService, PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
