import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ahorros, AhorrosService } from 'src/app/services/ahorros/ahorros.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {


  id:string="";
  ahorrosActual: Ahorros={numCuenta:'',saldoInicial:'',cedula:'',nombre:'',interes:''};
  constructor(
    private ahorrosService:AhorrosService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.id= this.antivateRouter.snapshot.params['id'];
    
    this.ahorrosService.getUnaAhorros(this.id).subscribe(
      res=>{
        this.ahorrosActual=res;
      },

      err=>console.log(err)
    );
  }
  
  guardar(){
    this.ahorrosService.editAhorros(this.id, this.ahorrosActual).subscribe(
      res=>{
        this.router.navigate(['/show']);
      },

      err=>console.log(err)
    );
  }

}
