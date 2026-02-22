import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalhaoPesqPage } from './talhao-pesq.page';

describe('TalhaoPesqPage', () => {
  let component: TalhaoPesqPage;
  let fixture: ComponentFixture<TalhaoPesqPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TalhaoPesqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
