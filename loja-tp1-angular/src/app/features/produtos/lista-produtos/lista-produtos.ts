import { Component, signal, computed } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { filter } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch bluejsfdjioçfsdjisfdjiofdsjiosfdjiosfdjiosfd',
      imageUrl:'images/logoifsp.png',
      //promo: true,
      estado: 'usado'
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl:'images/logoifsp.png',
      //promo: true,
      estado: 'esgotado'
    },
    {
      id: 1,
      nome: 'Teclado numerico',
      preco: 1200,
      descricao: 'Switch blue',
      imageUrl:'images/logoifsp.png',
      estado: 'novo'
    }
  ];

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos);

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
