import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../services/creator.service';
import { login, signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-auth',
  templateUrl: './creator-auth.component.html',
  styleUrl: './creator-auth.component.css'
})
export class CreatorAuthComponent implements OnInit{
  constructor(private creator: CreatorService, private route: Router) {}
  showLogin= false;
  authError: string= '';

  ngOnInit(): void {
    this.creator.reloadCreator()
  }

  signUp(data: signUp):void {
    console.warn(data)
    this.creator.userSignUp(data);
  }

  login(data: login):void {
    this.authError= '';
    this.creator.userLogin(data);
    this.creator.isLoginError.subscribe((isError)=> {
      if(isError) {
        this.authError= "Wrong Email or password!!"
      }
    })
  }

  openLogin() {
    this.showLogin= true;
  }

  openSignUp() {
    this.showLogin= false;
  }
}
