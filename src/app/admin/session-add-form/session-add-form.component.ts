import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionitemservice:FakeSessionItemService) 
  { }

  ngOnInit() {
  }
  addSession(sessionItem : NgForm) {
    console.log("session info " +JSON.stringify(sessionItem.value));
this.sessionitemservice.add(sessionItem.value);    
  }
}
