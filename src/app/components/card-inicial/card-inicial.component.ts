import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-inicial',
  templateUrl: './card-inicial.component.html',
  styleUrls: ['./card-inicial.component.css']
})
export class CardInicialComponent implements OnInit {

	@Input()
	gameCapa:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
