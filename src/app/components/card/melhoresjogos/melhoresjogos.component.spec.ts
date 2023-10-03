import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresjogosComponent } from './melhoresjogos.component';

describe('MelhoresjogosComponent', () => {
  let component: MelhoresjogosComponent;
  let fixture: ComponentFixture<MelhoresjogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhoresjogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelhoresjogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
