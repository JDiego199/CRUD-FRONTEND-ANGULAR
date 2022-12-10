import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ahorros, AhorrosService } from 'src/app/services/ahorros/ahorros.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  ahorrosNueva: Ahorros={numCuenta:'',saldoInicial:'',cedula:'',nombre:'',interes:''};

  constructor(private ahorrosServicio: AhorrosService, private router:Router) { }

  ngOnInit(): void {

}
agregarAhorros(){
  this.ahorrosServicio.saveAhorros(this.ahorrosNueva).subscribe(
    res=>{
      console.log(res);
      this.router.navigate(['/show']);
    },
    err=>console.log(err)
  );
}
}