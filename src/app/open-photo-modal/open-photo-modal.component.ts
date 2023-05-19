import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PointageService } from '../../services/pointage.service';

@Component({
  selector: 'app-open-photo-modal',
  templateUrl: './open-photo-modal.component.html',
  styleUrls: ['./open-photo-modal.component.css']
})
export class OpenPhotoModalComponent implements OnInit {
  
   userForm = new FormGroup({
    subject: new FormControl(null, [Validators.required]),
    file: new FormControl(null, [Validators.required]),
  
  });
  dialogRef: any;

  constructor(private pointageService:PointageService) { }
  ngOnInit(): void {
  }
  // onClick(){
  //   let dataToSend={
  //     Subject:this.userForm.value.subject,
  //     file:this.userForm.fileInput.files[0],



  //   }
  // }
  onSubmit(){
  
    
      //console.log(" ------onsubmit------- " + this.userForm + " --- " + this.userForm.get('fileInput')[0]);
     let dataToSend={
       subject : this.userForm.get('subject').value,
       file : "C:/Users/user/Pictures/bb.png" //this.userForm.get('fileInput').value
       
     }
     console.log(" ------onsubmit-------> " + dataToSend);
        this.pointageService.postImage(dataToSend['subject'],dataToSend['file']).subscribe(data=>{
       
            console.log("GOOOOOOOOOOOOOOOOOOD");
            this.dialogRef.closeAll();
            
    
       
        },err=>{
            console.log('ERROOOOOOOOOOOOOOOR  ',err);
        })
    
      }
  }




