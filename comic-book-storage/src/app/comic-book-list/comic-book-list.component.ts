import {Component, OnInit} from '@angular/core';

import {Comic} from '../shared/comic';
import {HttpService} from '../shared/http.service';

@Component({
  selector: 'app-comic-book-list',
  templateUrl: './comic-book-list.component.html',
  styleUrls: ['./comic-book-list.component.css']
})
export class ComicBookListComponent implements OnInit {
  public comics: Comic[];
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'id';
  public sortOrder = 'asc';

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getComics().then(comics => this.comics = comics);
  }

}
