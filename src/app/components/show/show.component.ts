import { Component,  OnInit } from '@angular/core';
import { AhorrosService } from 'src/app/services/ahorros/ahorros.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  lista:any=[];
  constructor(private ahorrosService: AhorrosService) { }

  ngOnInit(): void {
    this.listarAhorros();
  }

  listarAhorros()
  {
    //this.tareaService.getTareas().subscribe(
    this.ahorrosService.getAhorros().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
 
    this.ahorrosService.deleteAhorros(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
