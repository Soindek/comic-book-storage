import {Component, OnInit} from '@angular/core';

import {Comic} from '../shared/comic';
import {HttpService} from '../shared/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comic-book-list',
  templateUrl: './comic-book-list.component.html',
  styleUrls: ['./comic-book-list.component.css']
})
export class ComicBookListComponent implements OnInit {
  public comics: Comic[];

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: '#', name: 'id', sort: 'asc', className: 'view-comic'},
    {title: 'Title', name: 'title', className: 'view-comic'},
    {title: 'Cover',  name: 'coverUrl', sort: false, className: 'view-comic'},
    {title: 'Publication', name: 'publicationDate', className: 'view-comic'},
    {title: 'Genre', name: 'genre', className: 'view-comic'},
    {title: 'Excerpt', name: 'excerpt', className: 'view-comic'},
    {title: 'Written by', name: 'writtenBy', className: 'view-comic'},
    {title: 'Publisher', name: 'publisher', className: 'view-comic'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    className: ['table-striped', 'table-bordered']
  };

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.httpService.getComics().then(comics => {
      this.comics = comics;
      this.comics.map(comic => {
        comic.coverUrl = '<img src="'+ comic.coverUrl +'" alt="'+ comic.title +' Cover">';
        return comic;
      });
      this.length = this.comics.length;
      this.onChangeTable(this.config);
    });
  }

  public cellClicked(event: any): void {
    if (event.column == 'id') {
      this.router.navigate(['/detail', event.row.id]);
    }
  }

  public changePage(page:any, data:Array<any> = this.comics):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let sortedData = this.changeSort(this.comics, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

}
