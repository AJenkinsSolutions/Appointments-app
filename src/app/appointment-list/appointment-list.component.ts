import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  //Input fields
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  addAppointment(){
    console.log("INFO: Entered addAppointment method in AppointmentListComponent class");

    alert(this.newAppointmentTitle + " " + this.newAppointmentDate);

  }



  //List of appointments
  appointment: Appointment = {
    id: 1,
    title: "a",
    date: new Date('2023-07-30')}

}
