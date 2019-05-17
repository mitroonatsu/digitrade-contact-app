import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact('Aku', 'Ankka', '0501234567'));
    this.contacts.push(new Contact('Roope', 'Ankka', '0502345678'));
    this.contacts.push(new Contact('Taavi', 'Ankka', '0503456789'));
    console.log(this.contacts);
  }

}
