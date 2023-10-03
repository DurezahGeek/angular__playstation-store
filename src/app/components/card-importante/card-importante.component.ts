import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-importante',
  templateUrl: './card-importante.component.html',
  styleUrls: ['./card-importante.component.css']
})
export class CardImportanteComponent implements OnInit {

	@Input()
	gameNome:string =""
	@Input()
	gameCapa:string =""
	@Input()
	gameTexto:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
