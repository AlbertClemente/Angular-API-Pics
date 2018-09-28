import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }

  public getAllPhotos(): Promise<Picture[]> {
    return this.http.get<Picture[]>('https://jsonplaceholder.typicode.com/photos').toPromise();
  }
}
