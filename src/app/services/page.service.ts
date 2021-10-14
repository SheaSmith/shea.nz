import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Home } from '../models/home';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  private home: Subject<Home>;

  getHome(): Observable<Home> {
    if (this.home != null) {
      return this.home.asObservable();
    }

    return this.http.get<any>('./assets/pages/home.json').pipe(map(h => new Home(h)));
  }
}
