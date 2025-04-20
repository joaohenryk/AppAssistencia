import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonicModule } from '@ionic/angular'; 
import { TelasService, Tela } from 'src/app/services/telas.service';

@Component({
  selector: 'app-cadastro-tela',
  templateUrl: './cadastro-tela.component.html',
  styleUrls: ['./cadastro-tela.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule 
  ]
})
export class CadastroTelaComponent {
  novaTela: Tela = {
    marca: '',
    modelo: '',
    compra: 0,
    venda: 0
  };

  constructor(
    private modalCtrl: ModalController,
    private telasService: TelasService
  ) {}

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  adicionarTela() {
    this.telasService.addTela(this.novaTela).then(() => {
      
      this.fecharModal();
    });
  }
}
