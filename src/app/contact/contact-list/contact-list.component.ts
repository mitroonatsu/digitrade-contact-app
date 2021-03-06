import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {

  this.contactService.get().subscribe((response =>{
    this.contacts = response;
  }));
  }

  onContactSelected(contact: Contact): void{
    alert(contact.firstName);
  }

}
