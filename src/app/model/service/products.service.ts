import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class productsService{

  private products: Iproducts[] = [
    
    {id:1, name:'Nike Dunk Low', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'./tenis1.png'},
    {id:2, name:'Nike Dunk Low', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'../tenis2.png'},
    {id:3, name:'Nike Air Force', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'../tenis3.png'},

  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}