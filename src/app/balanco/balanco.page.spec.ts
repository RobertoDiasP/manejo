import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalancoPage } from './balanco.page';

describe('BalancoPage', () => {
  let component: BalancoPage;
  let fixture: ComponentFixture<BalancoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
