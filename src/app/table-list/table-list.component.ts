import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  time = new Date();
  rxTime = new Date();
  intervalId;
  users: any;
  matDialog: any;
  constructor(private employeeService:EmployeeService) { }
  
  


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.getusers()

  }

  getusers(){
    this.employeeService.getusers()
    .subscribe(data=>{
      console.log("*".repeat(50),data)
      this.users=data
    },err=>{
      console.log(err)
    })
  }

}
function DialogBodyComponent(DialogBodyComponent: any, arg1: { width: string; }) {
  throw new Error('Function not implemented.');
}

