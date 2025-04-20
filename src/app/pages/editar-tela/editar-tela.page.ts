import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TelasService, Tela } from 'src/app/services/telas.service';

@Component({
  selector: 'app-editar-tela',
  templateUrl: './editar-tela.page.html',
  styleUrls: ['./editar-tela.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule
  ]
})
export class EditarTelaPage implements OnInit {
  tela: Tela = {
    id: '',
    marca: '',
    modelo: '',
    compra: 0,
    venda: 0,
    aro: ''
  };

  constructor(
    private telasService: TelasService,
    private router: Router
  ) {}

  ngOnInit() {
    // Pegando o ID da tela passada pela rota
    const telaId = this.router.url.split('/').pop();

    // Verificando se telaId não é undefined
    if (telaId) {
      this.carregarTela(telaId);
    } else {
      // Caso não tenha ID válido, redireciona ou faz outra ação
      this.router.navigate(['/telas']);
    }
  }

  carregarTela(id: string) {
    // Agora vamos usar o método getTelas para buscar todas as telas
    this.telasService.getTelas().subscribe(telas => {
      // Filtrando pela tela específica
      const telaEncontrada = telas.find(tela => tela.id === id);
      if (telaEncontrada) {
        this.tela = telaEncontrada;
      } else {
        // Caso não encontre a tela, pode redirecionar ou exibir uma mensagem de erro
        this.router.navigate(['/telas']);
      }
    });
  }

  editarTela() {
    if (this.tela.id) {
      this.telasService.updateTela(this.tela).then(() => {
        this.router.navigate(['/telas']);
      });
    } else {
      // Caso o ID não exista, redireciona ou mostra um erro
      this.router.navigate(['/telas']);
    }
  }

  excluirTela() {
    if (this.tela.id) {
      this.telasService.deleteTela(this.tela.id).then(() => {
        this.router.navigate(['/telas']);
      });
    } else {
      // Caso o ID não exista, redireciona ou mostra um erro
      this.router.navigate(['/telas']);
    }
  }
}
