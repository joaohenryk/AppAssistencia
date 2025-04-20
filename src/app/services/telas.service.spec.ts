import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Tela {
  id?: string;  
  marca: string;
  modelo: string;
  compra: number;
  venda: number;
}

@Injectable({
  providedIn: 'root'
})
export class TelasService {

  constructor(private firestore: AngularFirestore) { }


  addTela(tela: Tela): Promise<void> {
    const id = this.firestore.createId();  
    return this.firestore.collection('telas').doc(id).set({
      ...tela,
      id  
    });
  }

  
  updateTela(tela: Tela): Promise<void> {
    if (!tela.id) {
      throw new Error('ID da tela é necessário para a atualização');
    }
    return this.firestore.collection('telas').doc(tela.id).update({
      marca: tela.marca,
      modelo: tela.modelo,
      compra: tela.compra,
      venda: tela.venda
    });
  }

  
  getTelas(): Observable<Tela[]> {
    return this.firestore.collection<Tela>('telas').valueChanges();
  }

  deleteTela(id: string): Promise<void> {
    return this.firestore.collection('telas').doc(id).delete();
  }
}
