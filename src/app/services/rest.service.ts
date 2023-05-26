import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private API_PACIENTES = "https://api.generadordni.es/v2/profiles/person";
  constructor(private http: HttpClient) {

  }

  getAllPacientes(): Observable<any> {
    return this.http.get(this.API_PACIENTES);
  }
}
