import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { flatMap, Observable } from 'rxjs';
import { ApiRequest } from '../interface/api-request.model';

@Injectable({
  providedIn: 'root'
})
export class MakeApiCallService {

  constructor(private http: HttpClient) { }

  // options = {
  //   headers: HttpHeaders,x1
  //   params: HttpParams,
  //   observe: 'response' as const
  // };

  makeApiRequest(apiInfo: ApiRequest): Observable<any> {
    const { method, url, params, headers, body } = apiInfo;

    let httpHeaders = new HttpHeaders();
    if (headers) {
      for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          httpHeaders = httpHeaders.set(key, headers[key]);
        }
      }
    }

    let httpParams = new HttpParams();
    if (params) {
      params.split('&').forEach(param => {
        const [key, value] = param.split('=');
        httpParams = httpParams.set(key, value);
      });
    }

    // switch (method) {
    //   case 'GET':
    //     return this.http.get(url, { headers: httpHeaders, params: httpParams });

    //   case 'POST':
    //     return this.http.post(url, body, { headers: httpHeaders, params: httpParams });

    //   case 'PUT':
    //     return this.http.put(url, body, { headers: httpHeaders, params: httpParams });

    //   case 'DELETE':
    //     return this.http.delete(url, { headers: httpHeaders, params: httpParams });

    //   default:
    //     throw new Error(`Unsupported HTTP method: ${method}`);
    // }

    return this.http.get(url, { headers: httpHeaders, params: httpParams, withCredentials: false });


  }
}
