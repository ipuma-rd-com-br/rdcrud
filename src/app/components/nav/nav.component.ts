import { Component, OnInit } from '@angular/core';
import { ROUTES } from "../../app-routing.module";

interface Item {
  label: string;
  route: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens: Item[] = [
    {label: "Home", route: "/home"},  
    {label: "Sobre", route: "/sobre"},
    {label: "Contato", route: "/contato"},
  ];

  constructor() { }

  // setItensAtivos(itemClicado: Item) {
  //   this.itens.forEach((item)=>{item.ativo = false;})
  //   itemClicado.ativo = true;
  // }

  ngOnInit(): void {
  }

}
