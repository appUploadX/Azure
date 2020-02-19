import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
  base64img: string = '';
  constructor(public http: HttpClient) { }

  setImage(img) {
    this.base64img = img;
  }
  getImage() {
    return this.base64img;
  }
}
