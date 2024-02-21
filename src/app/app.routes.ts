import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { EmployeesComponent } from "./employees/employees.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path:'employees',
    component: EmployeesComponent
  },
  { 
    path:'login',
    component: LoginComponent
  }
];
