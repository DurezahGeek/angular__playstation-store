import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImportanteComponent } from './card-importante.component';

describe('CardImportanteComponent', () => {
  let component: CardImportanteComponent;
  let fixture: ComponentFixture<CardImportanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImportanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
