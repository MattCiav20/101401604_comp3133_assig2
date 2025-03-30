import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apollo: Apollo) {}

  getEmployees(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query GetEmployees {
          employees {
            id
            first_name
            last_name
            email
            designation
            salary
          }
        }
      `
    }).valueChanges.pipe(map((result: any) => result.data.employees));
  }

  addEmployee(employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation AddEmployee($first_name: String!, $last_name: String!, $email: String!, $designation: String!, $salary: Float!) {
          addEmployee(first_name: $first_name, last_name: $last_name, email: $email, designation: $designation, salary: $salary) {
            id
            first_name
            last_name
            email
          }
        }
        `,
      variables: employee
    });
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateEmployee($id: ID!, $first_name: String, $last_name: String, $email: String, $designation: String, $salary: Float) {
          updateEmployee(id: $id, first_name: $first_name, last_name: $last_name, email: $email, designation: $designation, salary: $salary) {
            id
            first_name
            last_name
            email
          }
        }
      `,
      variables: { id, ...employee }
    });
  }
  
  deleteEmployee(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteEmployee($id: ID!) {
          deleteEmployee(id: $id) {
            id
          }
        }
      `,
      variables: { id }
    });
  }
  

}
