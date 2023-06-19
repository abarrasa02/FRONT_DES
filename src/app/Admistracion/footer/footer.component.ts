import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {

  }
    constructor(private readonly router:Router){

    }



    login(){
      this.router.navigate(['login'])
    }
    pedidos(){
      this.router.navigate(['pedidos'])
    }
}
