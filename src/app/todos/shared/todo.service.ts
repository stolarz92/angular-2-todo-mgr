import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

import { Todo } from './todo';

@Injectable()
export class TodoService {
  constructor(
    private http: Http,
    private _token_service: Angular2TokenService
  ) {}

  getTodos(): Observable<Todo[]> {
    return this._token_service.get('/todos/')
                              .map((response: Response) => <Todo[]>response.json())
  }

  getTodo(id: number) {
    return this._token_service.get('/todos/' + id)
  }

  createTodo(todo) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._token_service.post('/todos', JSON.stringify(todo), { headers: headers })
                              .map((res: Response) => res.json());
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
