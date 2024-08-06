import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser, Iarticle } from '../interfaces';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.urlAPI;

  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<any> {
    return this.http.post(`${this.url}/users`, user);
  }
  fetchAllArticles(): Observable<Iarticle[]> {
    return this.http
      .get<Iarticle[]>(`${this.url}/articles`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.error('une erreur trouvé', error);
    return throwError("L'api ne marche plus");
  }
}
