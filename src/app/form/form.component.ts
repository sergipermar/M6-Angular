import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product, ProductsService } from '../servicios/productServices';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{

    nombre:FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    apellido1:FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    apellido2:FormControl =  new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    provincia:FormControl = new FormControl('', Validators.required);
    fnacimiento:FormControl = new FormControl('', Validators.required);
    genre:FormControl = new FormControl('', Validators.required);
    dni:FormControl = new FormControl('', Validators.required);
    email:FormControl = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    vivienda:FormControl = new FormControl('', Validators.required);
    tel:FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]);
    password:FormControl = new FormControl('', [Validators.minLength(6), Validators.maxLength(15)]);
    adulto:FormControl = new FormControl('', Validators.required);


    MyNewForm: FormGroup = new FormGroup({nombre: this.nombre,
                                          apellido1: this.apellido1,
                                          apellido2: this.apellido2,
                                          provincia: this.provincia,
                                          fnacimiento: this.fnacimiento,
                                          genre: this.genre,
                                          dni: this.dni,
                                          email: this.email,
                                          vivienda: this.vivienda,
                                          tel: this.tel,
                                          password: this.password,
                                          adulto: this.adulto});
    
    ngOnInit() {}
    Clic(datos:FormGroup) {
      alert('Información validada')
      console.log(datos);
    }

      products:Product[] = [];
      productnombre:string = "";
      productapellido1:string = "";
      productapellido2:string = "";
      productprovincia:string = "";
      productfnacimiento:string = "";
      productgenre:string = "";
      productdni:string = "";
      productemail:string = "";
      productvivienda:string = "";
      productel:string = "";
      productpassword:string = "";
  @ViewChild("it1") myNameElem1!: ElementRef;
  @ViewChild("it2") myNameElem2!: ElementRef;
  @ViewChild("it3") myNameElem3!: ElementRef;
  @ViewChild("it4") myNameElem4!: ElementRef;
  @ViewChild("it5") myNameElem5!: ElementRef;
  @ViewChild("it6") myNameElem6!: ElementRef;
  @ViewChild("it7") myNameElem7!: ElementRef;
  @ViewChild("it8") myNameElem8!: ElementRef;
  @ViewChild("it9") myNameElem9!: ElementRef;
  @ViewChild("it10") myNameElem10!: ElementRef;
  @ViewChild("it11") myNameElem11!: ElementRef;

  constructor(private productService:ProductsService){}

  public addProduct(){    
    this.productService.sendProducts(this.myNameElem1.nativeElement.value, 
                                     this.myNameElem2.nativeElement.value,
                                     this.myNameElem3.nativeElement.value,
                                     this.myNameElem4.nativeElement.value,
                                     this.myNameElem5.nativeElement.value,
                                     this.myNameElem6.nativeElement.value,
                                     this.myNameElem7.nativeElement.value,
                                     this.myNameElem8.nativeElement.value,
                                     this.myNameElem9.nativeElement.value,
                                     this.myNameElem10.nativeElement.value,
                                     this.myNameElem11.nativeElement.value);
  }


}

export interface Clientes{
  productnombre:string;
  productapellido1:string;
  productapellido2:string;
  productprovincia:string;
  productfnacimiento:string;
  productgenre:string;
  productdni:string;
  productemail:string;
  productvivienda:string;
  productel:string;
  productpassword:string;
}