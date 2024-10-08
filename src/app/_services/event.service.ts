import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/events'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  // Get all events
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get event by ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create event with images (using FormData)
  createWithImages(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  // Create event (if you still need this method without FormData)
  create(event: any, image: File | null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Acc_ID', event.Acc_ID);
    formData.append('Event_Name', event.Event_Name);
    formData.append('Event_Description', event.Event_Description);
    formData.append('Event_Date', event.Event_Date);
    formData.append('Event_Location', event.Event_Location);
    formData.append('Event_Status', event.Event_Status.toString());  // Convert to string for FormData compatibility
    
    if (image) {
      formData.append('Event_Image', image); // Append image if available
    }

    return this.http.post<any>(this.apiUrl, formData);
  }

  // Update event (with image upload)
  update(id: number, event: any, image?: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Event_Name', event.Event_Name);
    formData.append('Event_Description', event.Event_Description);
    formData.append('Event_Date', event.Event_Date);
    formData.append('Event_Location', event.Event_Location);
    formData.append('Event_Status', event.Event_Status.toString());

    if (image) {
      formData.append('Event_Image', image);
    }

    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

  // Delete event by ID
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
