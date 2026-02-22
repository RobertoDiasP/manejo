import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosPesqPage } from './produtos-pesq.page';

describe('ProdutosPesqPage', () => {
  let component: ProdutosPesqPage;
  let fixture: ComponentFixture<ProdutosPesqPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosPesqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
