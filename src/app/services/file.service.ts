import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  sendFiles(body: any): Observable<Blob> {
    return this.http.post(`${environment.backendUrl}:${environment.backendPort}/api/format/docx`, body, {
      responseType: "blob"
    })
  }
}
