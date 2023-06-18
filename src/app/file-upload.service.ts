import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://79.80.238.57:34229/WE4B-Project/api';

  constructor(private http: HttpClient) { }

  upload(file: File) {
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);
    formData.append('id','2');
    formData.append('tz',new Date().toISOString())
    formData.append('update','2')
    /*
    console.log(formData);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData);
    return this.http.request(req);

     */
    return this.http.post(`${this.baseUrl}/upload.php`, {data: formData})
      .pipe(map(res => {
        console.log(res);
        return res;
    }));
  }
  /*
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  */
}
