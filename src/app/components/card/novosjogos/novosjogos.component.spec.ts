import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosjogosComponent } from './novosjogos.component';

describe('NovosjogosComponent', () => {
  let component: NovosjogosComponent;
  let fixture: ComponentFixture<NovosjogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosjogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovosjogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
