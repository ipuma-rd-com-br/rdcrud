import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from "src/app/models/Grupo";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];

  @Output() grupoSelecionado = new EventEmitter();

  private grupoTodos: Grupo = new Grupo(0, "TODOS");

  constructor(private http: HttpService) {
    this.http.getGrupos().subscribe(
      (data) => {
        this.grupos = [this.grupoTodos, ...data];
      }
    );
  }

  ngOnInit(): void {
  }

}
