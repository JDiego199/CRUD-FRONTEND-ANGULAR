import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AhorrosService } from 'src/app/services/ahorros/ahorros.service';
import { Login,LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-show',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lista:any=[];
  loginNueva : Login ={usuario:'',pass:''};
  constructor(private loginService: LoginService,private router:Router) {}

  ngOnInit(): void {
  this.listarLogins();
  }

  listarLogins()
  {
    this.loginService.getLogin().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
      
    );
  }




}
