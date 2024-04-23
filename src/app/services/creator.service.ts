import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  isCreatorLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(payload: signUp) {
    this.http.post('http://localhost:8080/sign-up', payload, {responseType: 'text'})
    .subscribe((result)=> {
      // this.isCreatorLoggedIn.next(true);
      console.warn(result)
      if(result) {
        localStorage.setItem('creator', JSON.stringify([payload]));
        //str payload. something hobe
        this.router.navigate(['creator-home'])
      }
    })
  }

  reloadCreator() {
    if(localStorage.getItem('creator')) {
      this.isCreatorLoggedIn.next(true);
      this.router.navigate(['creator-home'])
    }
  }

  userLogin(data: login) {
    console.warn(data)
    this.http.get(`http://localhost:3000/creator?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result: any)=> {

      if(result && result.body && result.body.length) {
        //
        const res= JSON.stringify(result.body)

        let creatorName= res && JSON.parse(res)[0].name;
        let creatorId= res && JSON.parse(res)[0].id;
        console.warn(creatorName, creatorId)
        var blogData= Object.assign([{"id": creatorId, "name": creatorName}]);
        console.warn(blogData)
        //
        console.warn("User Logged in")
        localStorage.setItem('creator', JSON.stringify(blogData));
        this.router.navigate(['creator-home'])
        // this.isLoginError.emit(false);
        // setTimeout(() => {
        //   this.router.navigate(['creator-home'])
        // }, 3000);
        
      } else {
        console.warn("Login Failed");
        this.isLoginError.emit(true)
      }
    })
  }
}
