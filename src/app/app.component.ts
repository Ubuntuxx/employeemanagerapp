import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employeemanagerapp';
  public employees: Employee[] = [];


  constructor(private employee: EmployeeService) { }

  public getEmployees(): void {
    this.employee.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }

    );
  }
}
