import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pointage-dialog',
  templateUrl: './pointage-dialog.component.html',
  styleUrls: ['./pointage-dialog.component.css']
})
export class PointageDialogComponent implements OnInit {
  myArray:any[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.myArray = data.message
  }

  ngOnInit(): void {
  
  }
  closeDialog() {
    // TODO: Implement close dialog logic
  }

  saveDialog() {
    // TODO: Implement save dialog logic
  }

}
