import { Component, OnInit } from '@angular/core';
import { trabalhos } from './trabalhos';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})

export class TrabalhosComponent implements OnInit {

  listaTrabalhos = trabalhos;

  constructor() { }

  ngOnInit(): void {
  }

}
