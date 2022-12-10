import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AhorrosService } from './services/ahorros/ahorros.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  cuentaForm: FormGroup | null=null;


  constructor(
    public fb: FormBuilder,
    public ahorrosService: AhorrosService
  ) {
  }
  ngOnInit(): void {

    this.cuentaForm = this.fb.group({

      numCuenta: ['', Validators.required],
      saldoInicial: ['', Validators.required],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      interes: ['', Validators.required],

    })

  }
/*
  guardar(): void {
    this.ahorrosService.saveAhorros(this.cuentaForm.value).subscribe(resp => {

    },
    error => {console.error(error)})
  }
*/
}
