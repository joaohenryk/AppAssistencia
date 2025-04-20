import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTelaPage } from './editar-tela.page';

describe('EditarTelaPage', () => {
  let component: EditarTelaPage;
  let fixture: ComponentFixture<EditarTelaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
