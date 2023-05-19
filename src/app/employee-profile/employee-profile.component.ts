import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PointageService } from '../../services/pointage.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee.model';
import { Pointage } from '../models/pointage.model';
import { MatDialog } from '@angular/material/dialog';
import { CongedialogComponent } from '../components/dialogs/congedialog/congedialog.component';
import { AddEmplyeeDialogComponent } from '../components/add-emplyee-dialog/add-emplyee-dialog.component';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  
  congéAjouté: any;
 

  onCongéAjouté(congé: any) {
   
    this.congéAjouté = congé
  }
  openCongeDialog(id:number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };

    const dialogRef = this.dialog.open(CongedialogComponent, {
      width: '400px',
      data: { employeeId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Effectuer des actions après la fermeture du dialogue si nécessaire
    });
  }

  employee:Employee;
  employeeID: any;
  authService: any;
  router: any;
  allPointages: any[];
  totalWorkHours= 0;
  pointages:any[]= [
    { heurePointage: '09:00:00' },
    { heurePointage: '12:30:00' },
    { heurePointage: '13:30:00' },
    { heurePointage: '17:00:00' }
  ];


  calculateTotalWorkHours(pointages: Pointage[]): number {
    let totalHours = 0;

    for (let i = 0; i < pointages.length - 1; i += 2) {
      //console.log(pointages[i].heurePointage.split['T'][1].replace(".000+00",""))
      const start = new Date(`2000-01-01T${pointages[i].heurePointage}`);
      const end = new Date(`2000-01-01T${pointages[i + 1].heurePointage}`);
      const diff = end.getTime() - start.getTime();
      totalHours += diff / 1000 / 60 / 60; // Convert milliseconds to hours
    }

    return totalHours;
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService ,private pointageService:PointageService,private dialog: MatDialog) {
 
      /**this.route.params.subscribe((params: Params) => {
        this.employeeID = params['id'];
      })*/
      // this.totalWorkHours = this.calculateTotalWorkHours(this.pointages);

   }
   openEditModal() {
    // Ouvrir le modal en utilisant la méthode open() du MatDialog
    const dialogRef = this.dialog.open(AddEmplyeeDialogComponent, {
      width: '400px', // Définissez la largeur souhaitée du modal
      data: this.employee // Passez les données de l'employé au modal si nécessaire
    });

    // Souscrivez à l'événement de fermeture du modal
    dialogRef.afterClosed().subscribe(result => {
      // Traitez les données de retour du modal si nécessaire
      console.log('Données modifiées :', result);
      // Effectuez les actions appropriées après la modification des données
    });
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.employeeID = params['id'];
    //  if(this.employeeID==='myProfile'){
    //    console.log('test');
    //    this.employeeID=103;
    //  }
    //   
    // })
    this.employeeID=localStorage.getItem('IDUSER')
    this.getEmployeeByID(this.employeeID);
    this.getAllpointages(this.employeeID)

  }
  getEmployeeByID(id:any) {
    this.employeeService.getEmployeeByID(id).subscribe(data => {
      this.employee = data;
      console.log('test',this.employee)

      //console.log(this.employee.pointages)
    },(err)=>{
      console.log(err);
      
    })
  }
  // getpointages(){
  //   this.pointageService.getpointages()
  //   .subscribe(data=>{
  //     this.allPointages=data;
     
  //   },err=>{

  //     console.log(err)
  //   })
    
  // }
  //login(){
    //this.authService.login('employe')
    //this.router.navigate(['/employeeProfile']);


  //}

  getAllpointages(employeeID){
    this.pointageService.getALLpointages(employeeID)
    .subscribe(data=>{
      this.allPointages=data;
      if(data){
        //this.totalWorkHours = this.calculateTotalWorkHours(this.allPointages);
        if(this.allPointages.length > 1){
          let start= new Date(this.allPointages[1].heurePointage);
          let end =new Date(this.allPointages[this.allPointages.length -1].heurePointage);
          const diff = end.getTime() - start.getTime();
          console.log(diff)
          this.totalWorkHours += diff / 1000 / 60 / 60; // Convert milliseconds to hours
          this.totalWorkHours=Math.round(this.totalWorkHours * 100) / 100
        }

       // 
       // this.totalWorkHours=new Date(this.allPointages[this.allPointages.length -1].heurePointage).getHours() - new Date(this.allPointages[1].heurePointage).getHours() 
      }
      
      
     
    },err=>{

      console.log(err)
    })
  }
}
  function openCongeDialog() {
    throw new Error('Function not implemented.');
  }

