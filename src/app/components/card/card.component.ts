import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	gameCapa:string = ""
	@Input()
	gameNome:string=""
	@Input()
	gameLabel:string=""
	@Input()
	gameTipo:string="XPTO | PS4"
	@Input()
	gamePreco:string="R$ 399,90"
	@Input()
	gameTexto:string="banana"
  constructor() { }

  ngOnInit(): void {
  }

}
