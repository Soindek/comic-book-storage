import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comic } from '../shared/comic';

@Injectable()
export class HttpService {

  private comicsUrl = 'api/comics';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getComics(): Promise<Comic[]> {
    return this.http.get(this.comicsUrl)
      .toPromise()
      .then(response => response.json().data as Comic[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getComic(id: number): Promise<Comic> {
    const url = `${this.comicsUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Comic)
      .catch(this.handleError);
  }

  update(comic: Comic): Promise<Comic> {
    const url = `${this.comicsUrl}/${comic.id}`;
    return this.http
      .put(url, JSON.stringify(comic), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Comic)
      .catch(this.handleError);
  }

  create(comic: Comic): Promise<Comic> {
    return this.http
      .post(this.comicsUrl, JSON.stringify(comic), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Comic)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Comic> {
    const url = `${this.comicsUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
