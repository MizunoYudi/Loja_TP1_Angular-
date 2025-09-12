import { Component, signal, computed, inject } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { filter } from 'rxjs';
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private produtos = toSignal<Produto[],Produto[]>(
    this.produtoService.listar(),
    {initialValue: []}
  );

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo()
                                ? this.produtos().filter(p => p.promo)
                                : this.produtos());

  alternarPromo() {
    this.apenasPromo.update(p => !p);
  }

  onViewProduct(id: number){
    alert(`id do produto:  ${id}`);
  }

  onAddToCart(produto: { id: number; quantity: number}) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantity}`);
  }
}
