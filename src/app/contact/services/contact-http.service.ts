import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Contact} from "../contact";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/contacts';

  }

  get(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.url).pipe(map(contacts =>{
      return contacts as Contact[];
    })
    );
  }
}
