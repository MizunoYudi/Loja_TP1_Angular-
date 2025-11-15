import { Component, signal, computed, inject } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { filter, finalize } from 'rxjs';
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private router = inject(Router);
  loading = signal(true);

  private produtos = toSignal<Produto[],Produto[]>(
    this.produtoService.listar().pipe(
      finalize(() => this.loading.set(false))
    ),
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
    this.router.navigate(['/produtos', id]);
  }

  onAddToCart(produto: { id: number; quantity: number}) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantity}`);
  }

  onCreateProduct(rota: String){
    this.router.navigate([rota]);
  }
}
