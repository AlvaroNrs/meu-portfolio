import { Component, OnInit } from '@angular/core';
import { Trabalho, trabalhos } from './trabalhos';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})

export class TrabalhosComponent implements OnInit {

  listaTrabalhos = trabalhos;
  trabalhoAtual: Trabalho = trabalhos[0];

  constructor() { }

  ngOnInit(): void {
  }

  abrirDetalhesTrabalho(trabalho:Trabalho) {
    this.trabalhoAtual = trabalho;
  }
}
