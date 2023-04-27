import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { AddEmplyeeDialogComponent } from '../components/add-emplyee-dialog/add-emplyee-dialog.component';
import { data } from 'jquery';
import { utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
})
export class EmployeeListComponent implements OnInit {
  time = new Date();
  rxTime = new Date();
  intervalId;
  users: any;
  matDialog: any;
 
  utilisateurs:any;
  dialogRef: any;
  constructor(private employeeService:EmployeeService, private dialog: MatDialog) { }
  onSubmit(utilisateur) {
    this.employeeService.addUser(utilisateur).subscribe(result => {
      this.dialogRef.close();
    });
  }
 
  addEmplyee(){
    alert("hello")
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; 
    const dialogRef = this.dialog.open(AddEmplyeeDialogComponent, 
      {
        data:{
          message:this.utilisateurs
        }
      }
);
console.log("***" + data);

  }

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

