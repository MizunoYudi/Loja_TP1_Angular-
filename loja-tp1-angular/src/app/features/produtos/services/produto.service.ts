import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Teclado Mecânico Azzo',
      preco: 560,
      descricao: 'Switch Azul',
      imageUrl: 'images/logoifsp.png',
      categoria: "eletronico",
      //promo: true,
      estado: 'usado'
    },
    {
      id: 2,
      nome: 'Headset 5.1',
      preco: 167,
      descricao: 'Headset surround qualidade',
      imageUrl: 'images/logoifsp.png',
      categoria: "eletronico",
      //promo: true,
      estado: 'esgotado'
    },
    {
      id: 3,
      nome: 'Panela Inox',
      preco: 300,
      descricao: 'Panela de aço inox',
      imageUrl: 'images/logoifsp.png',
      categoria: "cozinha",
      estado: 'novo'
    },
    {
      id: 4,
      nome: 'Luva',
      preco: 10,
      descricao: 'Switch blue',
      categoria: 'Luva de borracha',
      imageUrl: 'images/logoifsp.png',
      estado: 'novo'
    }
  ];

  listar(): Observable<Produto[]> {
    this.logger.info("ProdutoService - Listando produtos");
    return of(this.listaMock).pipe(delay(1000));
  }
}
