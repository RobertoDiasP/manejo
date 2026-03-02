import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagensPage } from './imagens.page';

describe('ImagensPage', () => {
  let component: ImagensPage;
  let fixture: ComponentFixture<ImagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
