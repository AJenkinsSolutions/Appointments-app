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

  clicked: boolean = false;

  addAppointment(){
    console.log("INFO: Entered addAppointment method in AppointmentListComponent class");

    //Conditions for adding new appointment
    if(this.newAppointmentTitle.length > 0){

      //Creating new ObJ
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
  
      };
      //Add to list
      this.appointmentsList.push(newAppointment);

      //Clean up
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

    }

    this.clicked = true;

  }

  deleteAppointment(index: number){
    this.appointmentsList.splice(index, 1);

  }
  


  //Defualt Appointment Model
  // appointment: Appointment = {
  //   id: 1,
  //   title: "Default appointment",
  //   date: new Date(Date.now())}


  //List of appointments
  appointmentsList: Appointment[] = [];

}


