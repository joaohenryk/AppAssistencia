import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelasPage } from './telas.page';

describe('TelasPage', () => {
  let component: TelasPage;
  let fixture: ComponentFixture<TelasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
