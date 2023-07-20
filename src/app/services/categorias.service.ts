import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  consultar_categorias(): Observable<any> {
    return this.http.get(environment.url_catalogo + '/categoria/consultar-categorias');
  }
}
