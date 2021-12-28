import { Component, Input, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any; 

  constructor(private sessionitemservice:FakeSessionItemService) { }

  ngOnInit(): void {
  }
ondelete ()
{
  this.sessionitemservice.delete(this.session);


}
}
