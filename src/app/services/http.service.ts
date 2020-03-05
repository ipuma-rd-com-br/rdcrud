import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Grupo } from '../models/Grupo';
import { Produto } from '../models/Produto';

const URL: string = "https://rdcrud.herokuapp.com";

function adaptadorDeGrupo(data: any[]) {
  return data.map(
    (element) => { return new Grupo(element.COD_GRUPO, element.DESC); }
  );
}

function adaptadorDeProduto(data: any[]) {
  return data.map(
    (element) => { 
      return new Produto(
        element.COD_PRODUTO,
        element.DESC,
        element.REG_ANVISA,
        element.FL_CONTROLADO,
        element.COD_GRUPO); 
    }
  );
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getGrupos() {
    // let observable: Observable<Object> = this.http.get(URL + "/grupos");
    // let operator = map(
    //                 (data: any[]) => {
    //                   data.map(
    //                     (element) => { return new Grupo(element.COD_GRUPO, element.DESC); }
    //                   )
    //                 }
    //               );
    // return observable.pipe(operator);
    return this.http.get(URL + "/grupos").pipe(map(adaptadorDeGrupo));
  }

  getProdutos() {
    // return this.http.get(URL+"/produtos")
    //   .pipe(
    //     map(
    //       (data: any[]) => {
    //         data.map(
    //           (element) => { return new Produto(
    //                                   element.COD_PRODUTO,
    //                                   element.DESC,
    //                                   element.REG_ANVISA,
    //                                   element.FL_CONTROLADO,
    //                                   element.COD_GRUPO); }
    //         )
    //       }        
    //     )
    //   );
      return this.http.get(URL+"/produtos").pipe(map(adaptadorDeProduto));
    }

}
