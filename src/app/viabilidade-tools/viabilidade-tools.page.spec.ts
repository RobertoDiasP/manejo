import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViabilidadeToolsPage } from './viabilidade-tools.page';

describe('ViabilidadeToolsPage', () => {
  let component: ViabilidadeToolsPage;
  let fixture: ComponentFixture<ViabilidadeToolsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViabilidadeToolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
