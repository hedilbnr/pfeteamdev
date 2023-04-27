import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee.service';

interface Role {
  id:number
  value: string;
}

@Component({
  selector: 'app-add-emplyee-dialog',
  templateUrl: './add-emplyee-dialog.component.html',
  styleUrls: ['./add-emplyee-dialog.component.css']
})
export class AddEmplyeeDialogComponent implements OnInit {
  user: any;
  userForm = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    dateNaiss: new FormControl(null, []),
    role: new FormControl(null, [Validators.required]),


  });

  roles: Role[] = [
    {    id:152, value: 'Administrateur' },
    {     id:152,value: 'Employé' }

  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private employeeService:EmployeeService,private dialogRef: MatDialog) {
    this.user = data.message
  }
  onSubmit() {
    console.log(this.userForm);
 let dataToSend={
   email:this.userForm.value.email,
   role:{
     id:152
   }
 }
    this.employeeService.addUser(this.userForm.value).subscribe(data=>{
   
        console.log("user created");
        this.dialogRef.closeAll();
        

   
    },err=>{
        console.log('user not created',err)
    })

  }
  utilisateur(utilisateur: any) {
    throw new Error('Method not implemented.');
  }



  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  closeDialog() {
    // TODO: Implement close dialog logic
  }

  saveDialog() {
    // TODO: Implement save dialog logic
  }
  ngOnInit(): void {
  }

}
