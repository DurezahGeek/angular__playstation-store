import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-melhoresjogos',
  templateUrl: './melhoresjogos.component.html',
  styleUrls: ['./melhoresjogos.component.css']
})
export class MelhoresjogosComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollEsquerda(): void {
    this.scroll(-300); 
  }

  scrollDireita(): void {
    this.scroll(300);
  }

  private scroll(offset: number): void {
    const container = this.elementRef.nativeElement.querySelector('.melhoresjogos');
    container.scrollLeft += offset;
  }
}
