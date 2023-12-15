import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  //List of appointments
  appointment: Appointment = {
    id: 1,
    title: "a",
    date: new Date('2023-07-30')}

}
