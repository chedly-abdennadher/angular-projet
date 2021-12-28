import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../fake-session-item.service';
import { Session } from '../Session';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
id;
private sub:any;
  tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
  session:any;
  constructor(private SessionItemService:FakeSessionItemService,private route:ActivatedRoute)   
  { }

  ngOnInit() {
this.sub=this.
    this.session=this.SessionItemService.getSession(1);
  }
  editsession(sessionItemForm:NgForm)
  {
    console.log("session updated"+JSON.stringify(sessionItemForm.value));
  }
}
