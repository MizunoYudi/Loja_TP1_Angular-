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
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch bluejsfdjioçfsdjisfdjiofdsjiosfdjiosfdjiosfd',
      imageUrl: 'images/logoifsp.png',
      //promo: true,
      estado: 'usado'
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl: 'images/logoifsp.png',
      //promo: true,
      estado: 'esgotado'
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl: 'images/logoifsp.png',
      estado: 'novo'
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl: 'images/logoifsp.png',
      estado: 'novo'
    }
  ];

  listar(): Observable<Produto[]> {
    this.logger.info("ProdutoService - Listando produtos");
    return of(this.listaMock).pipe(delay(1000));
  }
}
