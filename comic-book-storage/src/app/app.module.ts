import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { DataTableModule } from 'angular2-datatable';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComicBookListComponent } from './comic-book-list/comic-book-list.component';
import { EditComicBookComponent } from './edit-comic-book/edit-comic-book.component';
import { HttpService } from './shared/http.service';
import { DataFilterPipe } from './comic-book-list/data-filter.pipe';
import { DatePickerComponent } from './edit-comic-book/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicBookListComponent,
    EditComicBookComponent,
    DataFilterPipe,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DataTableModule,
    DatepickerModule.forRoot(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
