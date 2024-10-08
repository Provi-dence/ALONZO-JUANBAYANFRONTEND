import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.getAll();
  }

  viewDetails(index: number) {
    this.router.navigate(['/event', index]);
  }
}
