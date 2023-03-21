import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductsService{
    constructor(){}
   // public productName = new BehaviorSubject<string>('');
   // castProduct = this.productName.asObservable();

   // public productPrice = new BehaviorSubject<string>('');
   // castPrice = this.productPrice.asObservable();

    /*
    public broadCastProductName(name:string, price:string){
        this.productName.next(name);
        this.productPrice.next(price);
    }
    */

    products:Product[] = [ ];

    public sendProducts(nombre:string, apellido1:string,apellido2: string, provincia: string, fnacimiento: string, genre: string, dni: string, email: string, vivienda: string, tel: number, password: string):Observable<Product[]>{
        if (nombre !="" ){
            
        this.products.push({
            nombre: nombre, 
            apellido1: apellido1,
            apellido2: apellido2,
            provincia: provincia,
            fnacimiento: fnacimiento,
            genre: genre,
            dni: dni,
            email: email,
            vivienda: vivienda,
            tel: tel,
            password: password});
        }
        return of(this.products);
    }

}
export interface Product {
    nombre: string;  
    apellido1: string;
    apellido2: string;
    provincia: string;
    fnacimiento: string;
    genre: string;
    dni: string;
    email: string;
    vivienda: string;
    tel: number;
    password: string;
 }