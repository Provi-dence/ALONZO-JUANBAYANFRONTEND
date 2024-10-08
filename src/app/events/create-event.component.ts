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
    Acc_ID: 1,
    Event_Name: '',
    Event_Description: '',
    Event_Start_Date: '',
    Event_End_Date: '',
    Event_Location: '',
    Event_Status: 1,
    Event_Images: [] as File[]
  };

  events: any[] = [];
  showModal: boolean = false;
  imagePreviews: string[] = [];  // Store image preview URLs

  constructor(private eventService: EventService, private router: Router) {}

  openModal() {
    this.showModal = true;  // Open the modal
  }

  closeModal() {
    this.showModal = false;  // Close the modal
  }

  createEvent() {
    if (this.event.Event_Images.length > 0) {
      const formData = new FormData();
      formData.append('event', JSON.stringify(this.event));
      this.event.Event_Images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });

      this.eventService.createWithImages(formData).subscribe({
        next: () => {
          this.resetForm();
          this.router.navigate(['/events']);
          this.closeModal(); // Close modal after event creation
        },
        error: (err) => console.error('Error creating event', err)
      });
    } else {
      this.eventService.create(this.event, null).subscribe({
        next: () => {
          this.resetForm();
          this.router.navigate(['/events']);
          this.closeModal();
        },
        error: (err) => console.error('Error creating event without image', err)
      });
    }
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.event.Event_Images = Array.from(input.files); // Store multiple images
      this.previewImages();
    }
  }

  previewImages() {
    this.imagePreviews = [];
    this.event.Event_Images.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  resetForm() {
    this.event = {
      Acc_ID: 1,
      Event_Name: '',
      Event_Description: '',
      Event_Start_Date: '',
      Event_End_Date: '',
      Event_Location: '',
      Event_Status: 1,
      Event_Images: []
    };
    this.imagePreviews = [];
  }
}
