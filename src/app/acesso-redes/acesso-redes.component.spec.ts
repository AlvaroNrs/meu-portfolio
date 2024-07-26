import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoRedesComponent } from './acesso-redes.component';

describe('AcessoRedesComponent', () => {
  let component: AcessoRedesComponent;
  let fixture: ComponentFixture<AcessoRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessoRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
