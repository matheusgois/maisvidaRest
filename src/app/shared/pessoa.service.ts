import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  public API = '//localhost:8080';
  public PESSOA_API = this.API + '/pessoas';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/pessoa-doc');
  }

  get(id: string) {
    return this.http.get(this.PESSOA_API + '/' + id);
  }

  save(pessoa: any): Observable<any> {
    let result: Observable<Object>;
    if (pessoa['href']) {
      result = this.http.put(pessoa.href, pessoa);
    } else {
      result = this.http.post(this.PESSOA_API, pessoa);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
