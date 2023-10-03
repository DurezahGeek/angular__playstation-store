import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent implements OnInit {

	@Input()
	gameCapa:string = ""
	@Input()
	gameTexto:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
