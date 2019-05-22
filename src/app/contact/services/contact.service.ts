import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactHttpService} from "./contact-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
   /* this.contacts = [
      new Contact('Aku', 'Ankka', '12345'),
      new Contact('Roope', 'Ankka', '23456'),
      new Contact('Taavi', 'Ankka', '34567')
    ];*/
  }

  get(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

}
