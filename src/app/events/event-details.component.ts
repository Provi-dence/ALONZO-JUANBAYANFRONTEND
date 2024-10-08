import { Component } from '@angular/core';
import { EventService } from '../_services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  event = {
    Acc_ID: 1, // Adjust based on your application's logic
    Event_Name: '',
    Event_Description: '',
    Event_Date: '',  // Ensure this is in a valid date format (e.g., YYYY-MM-DD)
    Event_Location: '',
    Event_Status: 1, // Adjust as needed
    Event_Image: null as File | null  // Type explicitly as File | null
  };

  constructor(private eventService: EventService, private router: Router) {}

  createEvent() {
    const image = this.event.Event_Image;

    if (image) {
      this.eventService.create(this.event, image).subscribe({
        next: () => {
          this.resetForm(); // Reset the form after successful creation
          this.router.navigate(['/events']);
        },
        error: (err) => console.error('Error creating event', err)
      });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.event.Event_Image = input.files.item(0);
    }
  }

  // Define the resetForm method
  resetForm() {
    this.event = {
      Acc_ID: 1, // Reset to the default values as needed
      Event_Name: '',
      Event_Description: '',
      Event_Date: '',
      Event_Location: '',
      Event_Status: 1,
      Event_Image: null
    };
  }
}
