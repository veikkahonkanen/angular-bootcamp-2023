import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$!: Observable<any>;
  constructor(private http: HttpClient) { }

  login(userData:any): Observable<boolean> {
    let currentUser = userData.username;
    let currentPassword = userData.password;   
    let isLoggedIn = false;
    let subject = new Subject<boolean>();
    this.user$ = this.http.get(
      'http://localhost:3000/employees', 
      {
        params:{username:currentUser}
      }
    );
    this.user$.subscribe(
      data =>{
        if(data[0]){
          if(currentUser == data[0].username && currentPassword == data[0].password){
            localStorage.setItem('validuser', currentUser);
            isLoggedIn = true;
            subject.next(isLoggedIn);
          } else {
            isLoggedIn = false;
            subject.next(isLoggedIn);           
          }    
        } else {
          isLoggedIn = false;
          subject.next(isLoggedIn);
        }
      }
    );
    return subject.asObservable();
  }
}
