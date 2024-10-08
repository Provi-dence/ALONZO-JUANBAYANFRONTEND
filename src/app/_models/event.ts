// src/app/models/event.model.ts
export interface Event {
    Event_ID?: number; // Optional for new events
    Acc_ID: number;
    Event_Name: string;
    Event_Description: string;
    Event_Date: Date;
    Event_Location: string;
    Event_Status: number;
    Event_Image?: string; // Optional for fetching events
}
