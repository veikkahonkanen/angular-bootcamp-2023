import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees$!: Observable<any>;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.employees$ = this.http.get("http://localhost:3000/employees");
    /*
    .subscribe((data) => {
      this.employees$ = data;
      console.log(this.employees$);
    });
    */
  }
}
