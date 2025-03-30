import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    designation: '',
    salary: null
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      alert('Employee Added Successfully');
    });
  }
}
