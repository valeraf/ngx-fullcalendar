import { Component, OnInit } from '@angular/core';
import { EventObject, FullCalendarOptions } from 'ngx-fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options: FullCalendarOptions;
  events: EventObject[];

  ngOnInit() {
    this.options = {
      defaultDate: '2018-07-26',
      editable: true
    };

    this.events = [
      { id: 'a', title: 'My Birthday', allDay: true },
      { id: 'b', title: 'Friends coming round', start: '2018-07-26T18:00:00', end: '2018-07-26T23:00:00' }
    ];
  }

}
