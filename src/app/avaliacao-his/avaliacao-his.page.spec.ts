import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliacaoHisPage } from './avaliacao-his.page';

describe('AvaliacaoHisPage', () => {
  let component: AvaliacaoHisPage;
  let fixture: ComponentFixture<AvaliacaoHisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoHisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
