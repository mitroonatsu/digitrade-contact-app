import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {

  }

  ngOnInit() {
  }

}
