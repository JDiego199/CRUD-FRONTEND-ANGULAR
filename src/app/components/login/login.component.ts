import { Component,  OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AhorrosService } from 'src/app/services/ahorros/ahorros.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  usuario: string;
  password: string;

  constructor(private router:Router, public loginService: LoginService) {}

  login() {

    const user =  this.usuario;
    const pass = this.password;
    this.loginService.login(user,pass).subscribe( data => {
    
      if(data)    
      {     
    
        this.router.navigate(['/show']);    
  
      }    
      else{    
       // this.errorMessage = data.Message;    
      }    
      console.log(data);
    });

}
}