import { Component, OnInit , ElementRef} from '@angular/core';

@Component({
  selector: 'app-novosjogos',
  templateUrl: './novosjogos.component.html',
  styleUrls: ['./novosjogos.component.css']
})
export class NovosjogosComponent implements OnInit {

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
    const container = this.elementRef.nativeElement.querySelector('.novosjogos');
    container.scrollLeft += offset;
  }

}
