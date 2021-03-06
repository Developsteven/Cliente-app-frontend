import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from './models/factura';
import { FacturaService} from './services/factura.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})
export class DetalleFacturaComponent implements OnInit {

  factura: Factura;
  titulo: string ='Factura';

  constructor(private FacturasService: FacturaService, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params =>{
      let id = +params.get('id');
      this.FacturasService.getFactura(id).subscribe(factura => this.factura = factura);
    })
  }

}
