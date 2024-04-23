import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  menuType: String= 'default';
  creatorName: string= '';
  show = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((value: any)=> {
      if(value.url) {
        if(localStorage.getItem('creator') && value.url.includes('creator')) {
          // console.warn("in creator area")
          this.menuType= "creator";
          if(localStorage.getItem('creator')) {
            let creatorStore= localStorage.getItem('creator');
            let creatorData= creatorStore && JSON.parse(creatorStore)[0];
            this.creatorName= creatorData.name;
          }
        }else {
          // console.warn("Outside creator area")
          this.menuType= "default";
          if(localStorage.getItem('creator')) {
            let creatorStore= localStorage.getItem('creator');
            let creatorData= creatorStore && JSON.parse(creatorStore)[0];
            this.creatorName= creatorData.name;
            this.show= false
          } else {
            this.show= true;
          }
        }
      }
    })
  }

  logOut() {
    localStorage.removeItem('creator');
    this.router.navigate(['/']);
  }
}
