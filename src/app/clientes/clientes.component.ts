import { Component, ChangeDetectorRef } from '@angular/core';
import { Product, ProductsService } from '../servicios/productServices';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  products:Product[] = [];
  productnombre:any = "";
  productapellido1: any = "";
  productapellido2: any = "";
  productprovincia: any = "";
  productfnacimiento: any = "";
  productgenre: any = "";
  productdni: any = "";
  productemail: any = "";
  productvivienda: any = "";
  producttel: any = "";
  productpassword: any = "";

  constructor(private productService:ProductsService, private changeDdetector:ChangeDetectorRef){}

  ngOnInit(): void {
    this.productService.sendProducts(this.productnombre,
                                     this.productapellido1,
                                     this.productapellido2,
                                     this.productprovincia,
                                     this.productfnacimiento,
                                     this.productgenre,
                                     this.productdni,
                                     this.productemail,
                                     this.productvivienda,
                                     this.producttel,
                                     this.productpassword).subscribe((products:Product[]) => {this.products = products;
                                     this.products=this.productService.products}
    );
  }

  busqueda = '';
  get resultados() {
    return this.products.filter(products => {
      return products.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
    });
  }
}