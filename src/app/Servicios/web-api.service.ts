import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable' ;

export class Producto {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
}
export  class Tareas
{
    TareaID  : number
    Descripcion  : string
    CursoID : number
      Estado : number
    FechaEmision: Date
    FechaEntrega: Date
}

export  class Usuario
{
    TareaID  : number
    Descripcion  : string
    CursoID : number
      Estado : number
    FechaEmision: Date
    FechaEntrega: Date
}
 FechaEmision: Date
@Injectable({
  providedIn: 'root'
})

export class WebApiService {


  constructor(private http:HttpClient) { }
  devolverProductos(){
    const url = 'http://localhost:48990/api/Products';
    return this.http.get(url);
  }
  public getProducts(url: string): Observable<Producto[]> {
    
    return this.http.get<Producto[]>(url);
  }

  public getTareas(url: string): Observable<Tareas[]> {
    
    return this.http.get<Tareas[]>(url);
  }

  public getUsuario(url: string): Observable<Usuario[]> {
    
    return this.http.get<Usuario[]>(url);
  }


}
