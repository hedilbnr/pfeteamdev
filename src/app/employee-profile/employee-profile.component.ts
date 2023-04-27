import { Component } from '@angular/core';

interface Employee {
  name: string;
  hours: number[];
}

@Component({
  selector: 'app-employee-profil',
  template: `
  <br>
  <br>
  <br>
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.name }} - {{ getTotalHours(employee.hours) }} hours
      </li>
    </ul>
    <h2>Employee with the most hours worked</h2>
    <p>{{ getEmployeeWithMostHours().name }}</p>
  `,
})
export class EmployeeProfileComponent {
  employees: Employee[] = [
    { name: 'John', hours: [8, 7, 9, 8, 7] },
    { name: 'Jane', hours: [7, 7, 8, 7, 6] },
    { name: 'Bob', hours: [9, 8, 8, 9, 7] },
    { name: 'Alice', hours: [6, 7, 7, 6, 8] },
  ];
 

  getTotalHours(hours: number[]): number {
    return hours.reduce((acc, curr) => acc + curr, 0);
  }

  getEmployeeWithMostHours(): Employee {
    return this.employees.reduce((previous, current) =>
      this.getTotalHours(previous.hours) > this.getTotalHours(current.hours) ? previous : current
    );
  }
}
