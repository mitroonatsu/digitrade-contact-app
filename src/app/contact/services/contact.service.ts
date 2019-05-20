import {Injectable} from '@angular/core';
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Aku', 'Ankka', '12345'),
      new Contact('Roope', 'Ankka', '23456'),
      new Contact('Taavi', 'Ankka', '34567')
    ];
  }

  get(): Contact[] {
    return this.contacts;
  }

}
