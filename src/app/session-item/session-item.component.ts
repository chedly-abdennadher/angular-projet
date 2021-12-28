import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name='Formation Web';
@Input() session: any; 
  constructor() { }

  ngOnInit(): void {
  }

  inscrire(): void {
  this.session.name='Formation Web Avancée';
  this.session.participants= +this.session.participants + 1;
  console.log(this.session.participants+ ' Paricipants...');
  if(this.session.participants >= 5)
  {
    this.session.isCompleted=true;
  }
}

}
